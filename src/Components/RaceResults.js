import React, { useEffect, useState } from "react"
import axios from "axios"

function RaceResults() {
  const [raceResults, setRaceResults] = useState({})

  const getRaceResults = () => {
    return axios
      .get("https://ergast.com/api/f1/current/last/results.json")
      .then((res) => res.data)
  }
  useEffect(() => {
    getRaceResults().then((data) => setRaceResults(data))
  }, [])
  return (
    <div className="raceResults component">
      <h1>Latest Race Results</h1>
      {raceResults.MRData && (
        <div>
          <p>Season: {raceResults.MRData.RaceTable.Races[0].season}</p>
          <p>Round: {raceResults.MRData.RaceTable.Races[0].round}</p>
          <p>
            Circuit: {raceResults.MRData.RaceTable.Races[0].Circuit.circuitName}
          </p>
          <p>
            Location:{" "}
            {raceResults.MRData.RaceTable.Races[0].Circuit.Location.locality},{" "}
            {raceResults.MRData.RaceTable.Races[0].Circuit.Location.country}
          </p>
          <span>
            {raceResults.MRData.RaceTable.Races[0].Results.map((driver, i) => (
              <div className="driver" key={i}>
                <span>Position: {driver.position} </span>
                <span>
                  Driver: {driver.Driver.givenName}, {driver.Driver.familyName}{" "}
                  ({driver.Driver.code})
                </span>
              </div>
            ))}
          </span>
        </div>
      )}
    </div>
  )
}

export default RaceResults
