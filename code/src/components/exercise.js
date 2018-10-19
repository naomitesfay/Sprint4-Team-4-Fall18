import React from "react"
import "./exercise.css"
class Exercise extends React.Component {

  render() {
    return (
      <div className="exerciseForm">
        <div className="buttonBox">
          <h2>Easy</h2>
          <button>taking the stairs</button>
          <button>taking a walk</button>
          <button>One hour standing at work</button>
        </div>
        <div className="buttonBox">
          <h2>Medium</h2>
          <button>biking to work</button>
          <button>Planking in the office 2min</button>
          <button>25 squats</button>
        </div>
        <div className="buttonBox">
          <h2>Hard</h2>
          <button>Going to the gym</button>
          <button>Spinning</button>
          <button>Static wallsit for 5min</button>
        </div>
      </div>
    )
  }

}

export default Exercise
