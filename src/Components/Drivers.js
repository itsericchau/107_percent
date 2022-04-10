import React, { useEffect, useState } from "react"
import axios from "axios"
import { Spinner } from "react-bootstrap"

function Drivers() {
  const [drivers, setDrivers] = useState({})
  const [visible, setVisible] = useState(true)

  const getDrivers = () => {
    setVisible(true)
    return axios
      .get("https://ergast.com/api/f1/current/drivers.json")
      .then((res) => res.data)
      .finally(setVisible(false))
  }
  useEffect(() => {
    getDrivers().then((data) => setDrivers(data))
  }, [])

  return (
    <div className="drivers component">
      <h1>Current Drivers</h1>
      {visible && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {drivers.MRData && (
        <ul>
          {drivers.MRData.DriverTable.Drivers.map((driver, i) => (
            <div key={i}>
              <span>
                Name: {driver.givenName}, {driver.familyName} ({driver.code}){" "}
              </span><br/>
              <span>Nationality: {driver.nationality} </span><br/>
              <span>Born: {driver.dateOfBirth}</span><br/>
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
