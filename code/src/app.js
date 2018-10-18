import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import ClubsPage from "./pages/clubs-page"

class App extends React.Component {

  render() {
    return (

      <div>
        <ClubsPage />
      </div>
    )
  }

}

export default App
