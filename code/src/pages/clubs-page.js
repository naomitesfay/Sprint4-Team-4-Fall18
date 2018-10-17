import React from "react"

class ClubsPage extends React.Component {

  state = {
  allClubs: [],
  search: []
}

componentDidMount() {
  fetch(`https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${this.state.search}&numResponses=100`).then((response) => {
    return response.json()
  }).then((json) => {
    console.log(json)
  })
}

handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {

    // if (this.state.allClubs.length > 0) {
      return (
        <div className="search-field">
          <form>
            <input type="text" onChange={this.handleSearch}/>
          </form>

        </div>
      )
    }
  }



export default ClubsPage
