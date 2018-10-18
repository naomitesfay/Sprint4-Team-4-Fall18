import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import ClubsPage from "./pages/clubs-page"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <ClubsPage />
          <div>
            <Route path="/landingpage" exact="true" components={LandingPage} />
          </div>
        </div>
      </Router>
    )
  }

}

export default App
