import React, { useEffect, useState } from "react"
import axios from "axios"


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
      {!drivers.MRData && (<h2>Loading...</h2>) }
      {drivers.MRData && (
        <table>
          <thead>
            <tr>
              <th>Surname</th>
              <th>First Name</th>
              <th>Abbreviation</th>
              <th>Nationality</th>
              <th>Born</th>
              <th>Wikipedia Page</th>
            </tr>
          </thead>
          {drivers.MRData.DriverTable.Drivers.map((driver, i) => (
            <tbody key={i}>
              <tr>
                <td>{driver.familyName}</td>
                <td>{driver.givenName}</td>
                <td>{driver.code}</td>
                <td>{driver.nationality} </td>
                <td>{driver.dateOfBirth}</td>
                <td>
                  <a href={driver.url} target="_blank" rel="noopener noreferrer">{driver.url}</a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  )
}

export default Drivers
