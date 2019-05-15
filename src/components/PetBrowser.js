import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  eachPet = () => {
    return this.props.pets.map(pet => <div className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/></div>)
  }
  render() {
    return (this.eachPet())
  }
}

export default PetBrowser
