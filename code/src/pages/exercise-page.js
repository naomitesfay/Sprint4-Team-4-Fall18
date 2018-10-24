import React from "react"
import "./exercisePage.css"
import Exercise from "../components/exercise"
import CalendarDate from "../components/calendar"

class ExercisePage extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1>EXERCISE PAGE</h1>
        </div>
        <CalendarDate />
        <Exercise/>
      </div>
    )
  }

}

export default ExercisePage
