import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  constructor(props) {
    super(props)
  }

  generatePetCards = () => {
    const pets =  this.props.petsList
    return  pets.map(pet => {
    return <Pet name={pet.name} type={pet.type}  gender={pet.gender} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted}/>
    })
  }

  render() {
    return (<div className="ui cards">
      {this.generatePetCards()}
    </div>)
  }
}

export default PetBrowser
