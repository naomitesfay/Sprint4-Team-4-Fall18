import React from "react"
import "./exercise.css"
class Exercise extends React.Component {

  constructor(props) {
    super(props)
    const storeCount = localStorage.getItem("points")
    if (storeCount) {
      this.state = {
        count: JSON.parse(storeCount)
      }
    } else {
      this.state = {
        storeCount: 0
      }
    }
  }

  handleIncrementOne = () => {
    const points = this.state.count + 1
    this.setState({
      count: points
    })
    localStorage.setItem("points", JSON.stringify(points))
    this.setState({
      count: points
    })
  }

  handleIncrementTwo = () => {
    const points = this.state.count + 2
    this.setState({
      count: points
    })
    localStorage.setItem("points", JSON.stringify(points))
    this.setState({
      count: points
    })
  }

  render() {
    return (
      <div>
        <div className="exerciseForm">
          <div className="buttonBox">
            <h2>Easy</h2>
            <button onClick={this.handleIncrementOne}>taking the stairs</button>
            <button>taking a walk</button>
            <button>One hour standing at work</button>
          </div>
          <div className="buttonBox">
            <h2>Medium</h2>
            <button onClick={this.handleIncrementTwo}>biking to work</button>
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
        <span>{this.state.count}</span>
      </div>
    )
  }

}

export default Exercise
