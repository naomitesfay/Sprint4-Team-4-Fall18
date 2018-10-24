import React from "react"
import "./exercisePage.css"
import Exercise from "../components/exercise"
import CalendarDate from "../components/calendar"

class ExercisePage extends React.Component {

  render() {
    return (
      <div>
        <h1>EXERCISE PAGE</h1>
        <CalendarDate />
        <Exercise/>
      </div>
    )
  }

}

export default ExercisePage
