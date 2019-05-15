import React from 'react'
import App from './App.js'

class Filters extends React.Component {
  constructor(props){
    super(props)
    // console.log(props)
  }

  // onChangeType = () => {
  //   const value = this.state.value
  //   console.log(value)
  //   if(value === "cat"){
  //     console.log(value)
  //     console.log("showed")
  //
  //     return this.props.type.value
  //   }
  // }

  render() {

    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.props.onChangeType} name="type" id="type">
            <option id="all" value="all">All</option>
            <option id="cat" value="cat">Cats</option>
            <option id="dog" value="dog">Dogs</option>
            <option id="micropig" value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            onClick={this.props.onFindPetsClick}
            className="ui secondary button">
            Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
