import React, { useState } from "react"
import axios from "axios"

function Standings() {
  const [standings, setStandings] = useState("")

  const getStandings = () => {
    axios
      .get("http://ergast.com/api/f1/current/driverStandings.json")
      .then((res) => {
        setStandings(res.data)
      })
  }

  return (
    <div className="standings">
      <h1>This is Standings Component</h1>
      <button onClick={getStandings}>getStandings</button>
      <p>
        Season:
      </p>
      <p></p>
    </div>
  )
}

export default Standings
