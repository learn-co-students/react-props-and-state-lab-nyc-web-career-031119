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

  componentDidMount(){
    fetch('/api/pets')
    .then(res => res.json())
    .then(allPets=>this.setState({pets: allPets}))
  }

  hanldesChangePet = (pet) =>{
    this.setState({filters: {type: pet}}) // changes state of pet from select box change
  }

  onFindPetsClick = () =>{
    let petKind = this.state.filters.type
    if (petKind === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(allPets=>this.setState({pets: allPets}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(filterPets=>this.setState({pets: filterPets}))
    }
  }


  handlesAdopt = (id) =>{
     let adoptedArray = this.state.pets.map((pet)=>{
       if (pet.id === id){
         pet.isAdopted = true
         return pet
       }else{
         return pet
       }
    });
    this.setState({pets: adoptedArray})
  }




  render() {
    // console.log(this.state.filters.type);
    // console.log(this.state.pets);

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.hanldesChangePet} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handlesAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
