import React, { useEffect, useState } from "react"
import axios from "axios"

function RaceSchedule() {
  const [schedule, setSchedule] = useState({})

  const getSchedule = () => {
    return axios
      .get("https://ergast.com/api/f1/current.json")
      .then((res) => res.data)
  }
  useEffect(() => {
    getSchedule().then((data) => setSchedule(data))
  }, [])

  return (
    <div className="schedule component">
      <h1>Current Season Race Schedule</h1>
      {schedule.MRData && (
        <ul>
          {schedule.MRData.RaceTable.Races.map((round, i) => (
            <div key={i}>
              <span>
              {round.Circuit.circuitName} |{" "}
                {round.Circuit.Location.locality},{" "}
                {round.Circuit.Location.country}
              </span>
              <br />
              <span>
                FP1: {round.FirstPractice.date}, {round.FirstPractice.time}
              </span>
              <br />
              <span>
                FP2: {round.SecondPractice.date}, {round.SecondPractice.time}
              </span>
              <br />
              <span>
                {round.ThirdPractice && "FP3: " + round.ThirdPractice.date}
                {round.Sprint && "Sprint: " + round.Sprint.date},{" "}
                {round.ThirdPractice && round.ThirdPractice.time}
                {round.Sprint && round.Sprint.time}
              </span>
              <br />
              <span>
                Qualifying: {round.Qualifying.date}, {round.Qualifying.time}
              </span>
              <br />
              <span>
                Race: {round.date}, {round.time}
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
