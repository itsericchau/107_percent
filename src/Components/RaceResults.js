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
      {!raceResults.MRData && <h2>Loading...</h2>}
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
          <table>
            <thead>
              <tr>
                <td>Position</td>
                <td>First Name</td>
                <td>Surname</td>
                <td>Abbreviation</td>
                <td>Status</td>
                <td>Time</td>
              </tr>
            </thead>

            {raceResults.MRData.RaceTable.Races[0].Results.map((driver, i) => (
              <tbody className="driver" key={i}>
                <tr>
                  <td>{driver.position}. </td>
                  <td>{driver.Driver.givenName}</td>
                  <td>{driver.Driver.familyName}</td>
                  <td>{driver.Driver.code}</td>
                  <td>{driver.status} </td>
                  <td>{driver.Time && driver.Time.time}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  )
}

export default RaceResults
