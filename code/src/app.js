import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import ClubsPage from "./pages/clubs-page"
import ExercisePage from "./pages/exercise-page"
import "./components/exercise.css"

class App extends React.Component {

  state = {
    selectedTeam: ""
  }

  setSelectedTeam = (clubName) => {
    this.setState({selectedTeam: clubName}, () => localStorage.setItem("selectedTeam", this.state.selectedTeam))
  }

  render() {
    return (
      <Router>
          <div>
            <Route path="/" exact render={(props) => <ClubsPage setSelectedTeam={this.setSelectedTeam} {...props}/>} />
            <Route path="/landingpage" render={(props) => <LandingPage selectedTeam={this.state.selectedTeam} {...props}/>} />
            <Route path="/exercise" render={(props) => <ExercisePage selectedTeam={this.state.selectedTeam} {...props}/>} />
          </div>
      </Router>
    )
  }

}

export default App
