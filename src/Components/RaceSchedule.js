import React, { useEffect, useState } from "react"
import axios from "axios"

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

function formatDate(dateTime) {
  return new Date(dateTime.date + "T" + dateTime.time).toLocaleString(
    "en-us",
    options
  )
}
const getSchedule = () => {
  return axios
    .get("https://ergast.com/api/f1/current.json")
    .then((res) => res.data)
}

function RaceSchedule() {
  const [schedule, setSchedule] = useState({})

  useEffect(() => {
    getSchedule().then((data) => setSchedule(data))
  }, [])

  return (
    <div className="schedule component">
      <h1>Current Season Race Schedule</h1>
      {!schedule.MRData && <h2>Loading...</h2>}
      {schedule.MRData && (
        <ul>
          {schedule.MRData.RaceTable.Races.map((round, i) => (
            <div key={i}>
              <span>
                {round.Circuit.circuitName} | {round.Circuit.Location.locality},{" "}
                {round.Circuit.Location.country}
              </span>
              <br />
              <span
                style={
                  new Date(
                    round.FirstPractice.date + "T" + round.FirstPractice.time
                  ) < new Date()
                    ? { color: "grey", textDecoration: "line-through" }
                    : undefined
                }
              >
                FP1: {formatDate(round.FirstPractice)}
              </span>
              <br />
              <span
                style={
                  new Date(
                    round.FirstPractice.date + "T" + round.FirstPractice.time
                  ) < new Date()
                    ? { color: "grey", textDecoration: "line-through" }
                    : undefined
                }
              >
                FP2: {formatDate(round.SecondPractice)}
              </span>
              <br />
              <span
                style={
                  new Date(
                    round.FirstPractice.date + "T" + round.FirstPractice.time
                  ) < new Date()
                    ? { color: "grey", textDecoration: "line-through" }
                    : undefined
                }
              >
                {round.ThirdPractice &&
                  "FP3: " + formatDate(round.ThirdPractice)}
                {round.Sprint && "Sprint: " + formatDate(round.Sprint)}
              </span>
              <br />
              <span
                style={
                  new Date(
                    round.FirstPractice.date + "T" + round.FirstPractice.time
                  ) < new Date()
                    ? { color: "grey", textDecoration: "line-through" }
                    : undefined
                }
              >
                Qualifying: {formatDate(round.Qualifying)}
              </span>
              <br />
              <span
                style={
                  new Date(
                    round.FirstPractice.date + "T" + round.FirstPractice.time
                  ) < new Date()
                    ? { color: "grey", textDecoration: "line-through" }
                    : undefined
                }
              >
                Race: {formatDate(round)}
              </span>
              <br />
              <br />
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RaceSchedule
