import React from "react"
import { Link } from "react-router-dom"
import ClubsPage from "./clubs-page"

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
      <div>
        <h1>LANDING PAGE</h1>
        <h2>{this.props.selectedTeam} {this.state.points}</h2>
        <Link to="/exercise">register exercise</Link>
      </div>
    )
  }

}

export default LandingPage
