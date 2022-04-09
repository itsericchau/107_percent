import React, { useEffect, useState } from "react"
import axios from "axios"

function Drivers() {
  const [drivers, setDrivers] = useState({})

  const getDrivers = () => {
    return axios
      .get("https://ergast.com/api/f1/current/drivers.json")
      .then((res) => res.data)
  }
  useEffect(() => {
    getDrivers().then((data) => setDrivers(data))
  }, [])

  return (
    <div className="drivers component">
      <h1>Current Drivers</h1>
      {drivers.MRData && (
        <ul>
          {drivers.MRData.DriverTable.Drivers.map((driver, i) => (
            <div key={i}>
              <span>
                Name: {driver.givenName}, {driver.familyName}{" "}
              </span>
              <span>Nationality: {driver.nationality} </span>
              <span>
                <a href={driver.url}>Wikipedia Page</a>{" "}
              </span>
              <br />
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Drivers
