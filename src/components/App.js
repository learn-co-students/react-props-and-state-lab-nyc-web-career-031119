import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
const API = '/api/pets'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    this.setState({
      filters: {type: e.target.value}
    });
  };

  onFindPetsClick = () => {
    let queryParameter = this.state.filters.type;
    if(queryParameter === 'all'){
      fetch(API)
      .then(res => res.json())
      .then(petsData => {
        this.setState({pets: petsData})
      })//end then
    } else {
      fetch(API+`?type=${queryParameter}`)
      .then(res => res.json())
      .then(petsData => {
        this.setState({
          pets: petsData
        })
      })//end then
    };
  };

  onAdoptPet = () => {

  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
