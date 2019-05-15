import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import fetchMock from '../fetch-setup'


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

  handleOnChangeType = (typeOfPet) => {
   this.setState({filters: {
     type: typeOfPet
   }})
  }

  onAdoptPet = () => {

  }

//fetch pets
onFindPetsClick = () => {
  if(this.state.filters.type === 'all') {
    return fetch('/api/pets')
        .then(resp => resp.json())
          .then(pets => this.setState({pets: [...pets]}))
  }
  else if (this.state.filters.type === 'cat') {
    return fetch('/api/pets?type=cat')
          .then(resp => resp.json())
          .then(pets => this.setState({pets: [...pets]}))
  }
  else if (this.state.filters.type === 'dog') {
    return fetch('/api/pets?type=dog')
          .then(resp => resp.json())
          .then(pets => this.setState({pets: [...pets]}))
  }

  else if (this.state.filters.type === 'micropig') {
    return fetch('/api/pets?type=micropig')
          .then(resp => resp.json())
          .then(pets => this.setState({pets: [...pets]}))
  }
}

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
            //need to use the onPetsClick not onFindPetsClick because
            //your actual property is the one in orange
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.handleOnChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onFindPetsClick={this.onFindPetsClick} petsList={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
