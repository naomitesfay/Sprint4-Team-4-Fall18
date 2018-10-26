import React from "react"
import { Link } from "react-router-dom"
import ClubsPage from "./clubs-page"
import "./landing-page.scss"

class LandingPage extends React.Component {

  state = {
    points: 0
  }

  componentDidMount(){
    const points = localStorage.getItem(this.props.selectedTeam)
    if(points){
      this.setState({points})
    }
  }

  render() {
    return (
      <div className="landing-container">
        <div className="header">
          <h1>LANDING PAGE</h1>
        </div>
        <div className="teampoints">
          <h2>{this.props.selectedTeam} {this.state.points}</h2>
        </div>
        <div className="link-exercise">
          <Link to="/exercise">register exercise</Link>
        </div>
      </div>
    )
  }

}

export default LandingPage
