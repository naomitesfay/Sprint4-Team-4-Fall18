import React from "react"
import { Link } from "react-router-dom"

class ClubsPage extends React.Component {

  state = {
  allClubs: [],
  search: []
}

fetchResults() {
  fetch(`https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${this.state.search}&numResponses=5`).then((response) => {
    return response.json()
  }).then((json) => {
    this.setState({
      allClubs: json.data
    })
    console.log(json)
  })
}

handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    }, () => this.fetchResults())
  }


  render() {

      return (
        <div>
          <h1>CHOOSE YOUR CLUB AND SWEAT FOR GLORY!</h1>
          <div className="search-field">
            <form>
              <input type="text" value={this.state.search} onChange={this.handleSearch}/>
            </form>

            <div>
              <ul>
                {this.state.allClubs.map((club) => {
                    return <Link to="/landingpage"><li onClick={() => this.props.setSelectedTeam(club.name)} key={club.id}>{club.name}</li></Link>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      )
  }
}

export default ClubsPage
