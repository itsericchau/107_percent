import React, { useEffect, useState } from "react"
import axios from "axios"

function Standings() {
  const [standings, setStandings] = useState({})

  const getStandings = () => {
    return axios
      .get("https://ergast.com/api/f1/current/driverStandings.json")
      .then((res) => res.data)
  }

  useEffect(() => {
    getStandings().then((data) => setStandings(data))
  }, [])

  return (
    <div className="standings">
      <h1>Standings</h1>
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
                <li>{driver.position}</li>
                <li>{driver.Driver.givenName}</li>
                <li>{driver.Driver.familyName}</li>
              </div>
            )
          )}
        </ul>
      )}
    </div>
  )
}

export default Standings
