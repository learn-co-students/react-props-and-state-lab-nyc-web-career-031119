import React from 'react'
import App from './App.js'

import Pet from './Pet'

class PetBrowser extends React.Component {



  render() {
    // console.log(this.props.pets)
    const petCards = this.props.pets.map(pet => {
      // console.log(pet)
      return <Pet name={pet.name} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} id={pet.id}/>
    })
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
