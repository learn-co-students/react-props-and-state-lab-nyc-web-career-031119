import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPetCard = (petArray) => {
    return petArray.map(pet => {
       return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return <div className="ui cards">{this.renderPetCard(this.props.pets)}</div>
  }
}

export default PetBrowser
