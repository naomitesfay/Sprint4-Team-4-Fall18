import React from "react"
import "./exercisePage.scss"
import Exercise from "../components/exercise"
import CalendarDate from "../components/calendar"

class ExercisePage extends React.Component {

  render() {
    return (
      <div className="exercise-container">
        <h1>EXERCISE PAGE</h1>
        <h2>{this.props.selectedTeam}</h2>
        <CalendarDate />
        <Exercise team={this.props.selectedTeam} />
      </div>
    )
  }

}

export default ExercisePage
