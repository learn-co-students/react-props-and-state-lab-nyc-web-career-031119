import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
// import getByType from './data/pets.js'


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

onAdoptPet = (id) =>{
  const pets = this.state.pets
  pets.map(pet => {
    if (pet.id === id){
      console.log("adopt me")
      console.log(pet.id)
      pet.isAdopted = true;
      console.log(pet.isAdopted);
    }
  })
  this.setState({pets})

  }


  onChangeType = (e) => {
    console.log(e.target.value)
    // const value = this.state.value
    this.setState({filters: {type: e.target.value}})

  }



  onFindPetsClick = () => {
    console.log(this.state.filters.type)
    // debugger
    if(this.state.filters.type === "all"){
      return ((fetch('/api/pets')
      .then(res => res.json())
      // .then(console.log)
      .then(pets => {this.setState({pets: pets})})
      ))
    } else if(this.state.filters.type === "cat"){
         fetch('/api/pets?type=cat')
        .then(res => res.json())
        // .then(console.log)
        .then(pets => {
          this.setState({pets: pets})
        })
      }else if(this.state.filters.type === "dog"){
           fetch('/api/pets?type=dog')
          .then(res => res.json())
          // .then(console.log)
          .then(pets => {
            this.setState({pets: pets})
          })
      }else if(this.state.filters.type === "micropig"){
           fetch('/api/pets?type=micropig')
          .then(res => res.json())
          // .then(console.log)
          .then(pets => {
            this.setState({pets: pets})
          })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
              onAdoptPet={this.onAdoptPet}
              // onFindPetsClick={this.onFindPetsClick}
              pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
