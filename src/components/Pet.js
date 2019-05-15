import React from 'react'

class Pet extends React.Component {

  state = {
    adopted: this.props.pet.isAdopted
  };

  render() {
    const {type, age, name, weight, gender, isAdopted, id} = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'male' ? '♂' : '♀'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ?
            (<button className="ui disabled button" id={id}>Already adopted</button>)
            :
            (<button className="ui primary button" id={id} onClick={() => {this.props.onAdoptPet(id)} }>Adopt a pet</button>)
          }
        </div>
      </div>
    )
  }
}

export default Pet
