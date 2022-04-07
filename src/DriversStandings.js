import React, { useEffect, useState } from "react"
import axios from "axios"

function DriverStandings() {
  const [standings, setStandings] = useState({})

  const getDriverStandings = () => {
    return axios
      .get("https://ergast.com/api/f1/current/driverStandings.json")
      .then((res) => res.data)
  }
  useEffect(() => {
    getDriverStandings().then((data) => setStandings(data))
  }, [])

  return (
    <div className="standings">
      
      <h1>Current Drivers Standings</h1>
      {standings.MRData && (
        <ul>
          <li>
            Season: {standings.MRData.StandingsTable.StandingsLists[0].season}
          </li>
          <li>
            Round: {standings.MRData.StandingsTable.StandingsLists[0].round}
          </li>
          {standings.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
            (driver, i) => (
              <div key={i}>
                <span>Position: {driver.position} </span>
                <span>
                  Driver: {driver.Driver.givenName} {driver.Driver.familyName}
                </span>
                <br />
              </div>
            )
          )}
        </ul>
      )}
    </div>
  )
}

export default DriverStandings
