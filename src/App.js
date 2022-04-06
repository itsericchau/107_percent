import "./App.css"
import React, { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Standings from "./Standings"

function App() {
  const [characterName, setCharacterName] = useState("")

  return (
    <div className="App">
      <h1>107%</h1>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/standings">Standings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </div>
  )
}

export default App
