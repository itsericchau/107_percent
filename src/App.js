import "./App.scss"
import React, { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Components/Home"
import Standings from "./Components/Standings"
import RaceResults from "./Components/RaceResults"
import Drivers from "./Components/Drivers"
import RaceSchedule from "./Components/RaceSchedule"

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <Link to="/">Home</Link> <Link to="/standings">Standings</Link>{" "}
        <Link to="/race_results">Race Results</Link>{" "}
        <Link to="/drivers">Drivers</Link>{" "}
        <Link to="/race_schedule">Race Schedule</Link>{" "}
      </nav>
      <main className="main">
        <h1>107%</h1>
        <h2>
          Formula One Directory for its history in races, circuits, drivers and
          much more
        </h2>
        <h3>
          107% rule: During the first phase of qualifying, any driver who fails
          to set a lap within 107 percent of the fastest Q1 time will not be
          allowed to start the race. However, in exceptional circumstances,
          which could include a driver setting a suitable time during practice,
          the stewards may permit the car to start.
        </h3>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/race_results" element={<RaceResults />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/race_schedule" element={<RaceSchedule />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
