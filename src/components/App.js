import React from 'react'

import Filters    from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  BASE_LINK = '/api/pets';

  state = {
    pets:    [],
    filters: {
      type: 'all'
    }
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        pet.isAdopted = true;
      }
      return pet;
    });
    this.setState({
      pets
    })
  };

  onChangeType = e => {
    this.setState({
      filters: {
        type: e.target.value
      }
    });
    console.log(this.state.filters.type)
  };

  onFindPetsClick = e => {
    const type = this.state.filters.type;
    let link   = this.BASE_LINK;
    if (type !== 'all') {
      link = this.BASE_LINK + '?type=' + type;
    }
    fetch(link)
      .then(res => res.json())
      .then(pets => {
        this.setState({
          pets: [...pets]
        })
      });
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
