import React from 'react'

class Pet extends React.Component {



  buttonHandler = () => {
    return this.props.pet.isAdopted === true ? "ui disabled button" : "ui primary button"
  }

  buttonHandlerOpposite = () => {
    return !this.props.pet.isAdopted === true ? "ui disabled button" : "ui primary button"
  }

  render() {
    console.log(this.props)
    return (
      <div className="card" key={this.props.pet.id}>
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂ ' : '♀ ' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.buttonHandlerOpposite()} onClick={ () => {this.props.onAdoptPet(this.props.pet.id)} }>Already adopted</button>
          <button className={this.buttonHandler()} onClick={ () => {this.props.onAdoptPet(this.props.pet.id)} }>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
