import React from "react"
import "./exercisePage.css"
import Exercise from "../components/exercise"
import CalendarDate from "../components/calendar"

class ExercisePage extends React.Component {

  render() {
    return (
      <div>
        <h1>EXERCISE PAGE</h1>
        <h2>{this.props.selectedTeam}</h2>
        <CalendarDate />
        <Exercise/>
      </div>
    )
  }

}

export default ExercisePage
