import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all',
        something: 'asdflj'
      }
    }
  }

  onChangeType = (arg) => {
    this.setState({filters:{type: arg}})
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(results => results.json())
      .then(json => this.setState({pets:json}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(results => results.json())
      .then(json => this.setState({pets:json}))
    }
  }

  onAdoptPet = (id) => {
    let adoptedArray = this.state.pets.map((pet)=>{
      if (pet.id === id){
        pet.isAdopted = true;
        return pet
      } else {
        return pet
      }
    })
    this.setState({pets: adoptedArray})
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
