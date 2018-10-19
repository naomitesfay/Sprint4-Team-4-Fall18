import React from "react"
import { Link } from "react-router-dom"

class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <h1>LANDING PAGE</h1>
        <Link to="/exercise">register exercise</Link>
      </div>
    )
  }

}

export default LandingPage
