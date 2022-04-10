import React, { useEffect, useState } from "react"
import axios from "axios"
import { Spinner } from "react-bootstrap"

function DriversStandings2021() {
  const [standings, setStandings] = useState({})
  const [visible, setVisible] = useState(true)

  const getDriverStandings = () => {
    setVisible(true)
    return axios
      .get("https://ergast.com/api/f1/2021/driverStandings.json")
      .then((res) => res.data)
      .finally(setVisible(false))
  }
  useEffect(() => {
    getDriverStandings().then((data) => setStandings(data))
  }, [])

  return (
    <div className="standings component">
      <h1>2021 Season Drivers Standings Final Results</h1>
      {visible && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {standings.MRData && (
        <div>
          <p>
            Season: {standings.MRData.StandingsTable.StandingsLists[0].season}
          </p>
          <p>
            Round: {standings.MRData.StandingsTable.StandingsLists[0].round}
          </p>
          {standings.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
            (driver, i) => (
              <div key={i}>
                <span>{driver.position}. </span>
                <span>
                  {driver.Driver.givenName} {driver.Driver.familyName} (
                  {driver.Driver.code}){" "}
                </span>
                <span>Points: {driver.points} </span>
                <span>Wins: {driver.wins} </span>
                <span>Team: {driver.Constructors[0].name}</span>
                <br />
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default DriversStandings2021
