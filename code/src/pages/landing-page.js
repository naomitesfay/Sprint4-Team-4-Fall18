import React from "react"
import { Link } from "react-router-dom"
import ClubsPage from "./clubs-page"

class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <h1>LANDING PAGE</h1>
        <h2>{this.props.selectedTeam}</h2>
        <Link to="/exercise">register exercise</Link>
      </div>
    )
  }

}

export default LandingPage
