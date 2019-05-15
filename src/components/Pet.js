import React from 'react'

class Pet extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    isAdopted: this.props.isAdopted
  }
}

onClick = (e) => {
  e.target.className = "ui disabled button"
  e.target.innerText = "Already adopted"
  this.setState({isAdopted: true})
}

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            gender: {this.props.gender === 'male' ? `♂` : `♀` }
            name: {this.props.name}

          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>age: {this.props.age}</p>
            <p>weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button" onClick={this.onClick}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
