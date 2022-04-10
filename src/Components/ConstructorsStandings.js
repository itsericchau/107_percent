import React, { useEffect, useState } from "react"
import axios from "axios"

function ConstructorsStandings() {
  const [standings, setStandings] = useState({})

  const getConstructorStandings = () => {
    return axios
      .get("https://ergast.com/api/f1/current/constructorStandings.json")
      .then((res) => res.data)
  }
  useEffect(() => {
    getConstructorStandings().then((data) => setStandings(data))
  }, [])

  return (
    <div className="standings component">
      <h1>Current Constructors Standings</h1>
      {standings.MRData && (
        <div>
          <p>
            Season: {standings.MRData.StandingsTable.StandingsLists[0].season}
          </p>
          <p>
            Round: {standings.MRData.StandingsTable.StandingsLists[0].round}
          </p>
          {standings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
            (constructor, i) => (
              <div key={i}>
                <span>Position: {constructor.position} </span>
                <span>Team: {constructor.Constructor.name} </span>
                <span>Points: {constructor.points} </span>
                <br />
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default ConstructorsStandings
