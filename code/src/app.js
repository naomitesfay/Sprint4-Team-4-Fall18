import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import ClubsPage from "./pages/clubs-page"
import ExercisePage from "./pages/exercise-page"

class App extends React.Component {

  render() {
    return (
      <Router>
          <div>
            <Route path="/" exact component={ClubsPage} />
            <Route path="/landingpage" component={LandingPage} />
            <Route path="/exercise" component={ExercisePage} />
          </div>
      </Router>
    )
  }

}

export default App
