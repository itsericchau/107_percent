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
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Points</th>
                <th>Wins</th>
                <th>Surname</th>
                <th>First Name</th>
                <th>Abbreviation</th>
                <th>Nationality</th>
              </tr>
            </thead>
            {standings.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
              (driver, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{driver.position}. </td>
                    <td>{driver.points} </td>
                    <td>{driver.wins} </td>
                    <td>{driver.Driver.givenName}</td>
                    <td>{driver.Driver.familyName}</td>
                    <td>{driver.Driver.code}</td>
                    <td>{driver.Driver.nationality}</td>
                  </tr>
                </tbody>
              )
            )}
          </table>
        </div>
      )}
    </div>
  )
}

export default DriversStandings2021
