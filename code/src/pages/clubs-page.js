import React from "react"

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

    // if (this.state.allClubs.length > 0) {
      return (
        <div className="search-field">
          <form>
            <input type="text" value={this.state.search} onChange={this.handleSearch}/>
          </form>

          <div>
            <ul>
              {allClubs.map((club) => {
                  return (<li>club.name</li>)
                })
            </ul>
          </div>


        

        </div>
      )

  }



export default ClubsPage
