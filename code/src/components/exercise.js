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
  handleIncrementThree = () => {
    const points = this.state.count + 3
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
            <h2>Easy: 1 point</h2>
            <button onClick={this.handleIncrementOne}>taking the stairs</button>
            <button onClick={this.handleIncrementOne}>taking a walk</button>
            <button onClick={this.handleIncrementOne}>One hour standing at work</button>
          </div>
          <div className="buttonBox">
            <h2>Medium: 2 points</h2>
            <button onClick={this.handleIncrementTwo}>biking to work</button>
            <button onClick={this.handleIncrementTwo}>Planking in the office 2min</button>
            <button onClick={this.handleIncrementTwo}>25 squats</button>
          </div>
          <div className="buttonBox">
            <h2>Hard: 3 points</h2>
            <button onClick={this.handleIncrementThree}>Going to the gym</button>
            <button onClick={this.handleIncrementThree}>Spinning</button>
            <button onClick={this.handleIncrementThree}>Static wallsit for 5min</button>
          </div>
        </div>
        <div className="counter">
          <span>{this.state.count}</span>
        </div>
      </div>
    )
  }

}

export default Exercise
