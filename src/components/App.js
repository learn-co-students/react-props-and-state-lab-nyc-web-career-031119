import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


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
   const newState = e.target.value
   this.setState({ filters: { type: newState } })
   return e.target.value
 }

 onFindPetsClick = () => {
   if(this.state.filters.type === "all"){
     this.fetchAll()
   } else {
     this.fetchType(this.state.filters.type)
   }
 }

 fetchAll = () => {
   fetch(`/api/pets`)
   .then( res => res.json())
   .then(pets => this.setState({ pets: pets}));
 }

 fetchType = (type) => {
   fetch(`/api/pets?type=${type}`)
   .then( res => res.json())
   .then(pets => this.setState({ pets: pets}));
 }

  onAdoptPet = (petId) => {
    console.log(petId)
  // this.setState(prevState)

    let ourPets = this.state.pets
    ourPets = ourPets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: !pet.isAdopted} : pet
    })
    this.setState({pets: ourPets})
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
              <Filters onChangeType={ this.onChangeType } onFindPetsClick= { this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser isAdopted={ this.state.isAdopted} pets={ this.state.pets }  onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
