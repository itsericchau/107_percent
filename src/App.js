import "./App.scss"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Components/Home"
import RaceResults from "./Components/RaceResults"
import Drivers from "./Components/Drivers"
import RaceSchedule from "./Components/RaceSchedule"
import Navbar from "react-bootstrap/Navbar"
import { Container, Nav, NavDropdown } from "react-bootstrap"
import DriversStandings from "./Components/DriversStandings"
import ConstructorsStandings from "./Components/ConstructorsStandings"
import DriversStandings2021 from "./Components/DriversStandings2021"
import ConstructorsStandings2021 from "./Components/ConstructorsStandings2021"

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="#">107%</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="/race_schedule">Race Schedule</Link>
                <NavDropdown title="Standings" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/drivers_standings">
                      Current Drivers Standings
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/constructors_standings">
                      Current Constructors Standings
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="/drivers_standings_2021">
                      Driver Standings 2021
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/constructors_standings_2021">
                      Constructors Standings 2021
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link to="/race_results">Race Results</Link>
                <Link to="/drivers">Drivers</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      <main className="main">
        {/* <h1>107%</h1> */}
        <h3>One Stop Shop for Formula One Content</h3>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/drivers_standings" element={<DriversStandings />} />
          <Route
            exact
            path="/drivers_standings_2021"
            element={<DriversStandings2021 />}
          />
          <Route
            exact
            path="/constructors_standings"
            element={<ConstructorsStandings />}
          />
          <Route
            exact
            path="/constructors_standings_2021"
            element={<ConstructorsStandings2021 />}
          />
          <Route exact path="/race_results" element={<RaceResults />} />
          <Route exact path="/drivers" element={<Drivers />} />
          <Route exact path="/race_schedule" element={<RaceSchedule />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
