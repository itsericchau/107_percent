import React, { useEffect, useState } from "react"
import axios from "axios"

function ConstructorsStandings2021() {
  const [standings, setStandings] = useState({})

  const getConstructorStandings = () => {
    return axios
      .get("https://ergast.com/api/f1/2021/constructorStandings.json")
      .then((res) => res.data)
  }
  useEffect(() => {
    getConstructorStandings().then((data) => setStandings(data))
  }, [])

  return (
    <div className="standings component">
      <h1>Season 2021 Constructors Standings Final Results</h1>
      {!standings.MRData && (<h2>Loading...</h2>) }
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
                <th>Team</th>
                <th>Points</th>
                <th>Wins</th>
                <th>Nationality</th>
                <th>Wikipedia Page</th>
              </tr>
            </thead>

            {standings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
              (constructor, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{constructor.position} </td>
                    <td>{constructor.Constructor.name} </td>
                    <td>{constructor.points} </td>
                    <td>{constructor.wins} </td>
                    <td>{constructor.Constructor.nationality} </td>
                    <td> <a href={constructor.Constructor.url} target="_blank" rel="noopener noreferrer">{constructor.Constructor.url}</a>  </td>
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

export default ConstructorsStandings2021
