import React from "react"
import "./exercisePage.css"
import Exercise from "../components/exercise"
import Calendar from 'react-calendar'

class ExercisePage extends React.Component {

  render() {
    return (
      <div>
        <h1>EXERCISE PAGE</h1>
        <Calendar />
        <Exercise/>
      </div>
    )
  }

}

export default ExercisePage
