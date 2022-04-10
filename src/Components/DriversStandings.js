import React, { useEffect, useState } from "react"
import axios from "axios"

function DriversStandings() {
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
    <div className="standings component">
      <h1>Current Drivers Standings</h1>
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
                  {driver.Driver.givenName} {driver.Driver.familyName}{" "}
                </span>
                <span>Points: {driver.points} </span>
                <br />
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default DriversStandings
