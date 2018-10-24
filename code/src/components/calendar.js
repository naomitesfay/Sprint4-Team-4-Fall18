import React from "react"
import Calendar from 'react-calendar';
class CalendarDate extends React.Component {

  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  onClickDay = date => alert("You can do this! Register your exercise points!")

  render() {
    return (
      <div>
      <Calendar
        onChange={this.onChange}
        value={this.state.date}
        maxDetail="month"
        onClickDay ={this.onClickDay}
      />
      </div>
    )
  }

}

export default CalendarDate
