// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  //has an initial state property

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

onClick = () => {

  console.log('ya done clicked me')
  this.setState({
    timesClicked: this.state.timesClicked + 1
  })
}

  render() {
    return (
      <button onClick={this.onClick}> <label> {this.state.timesClicked}</label>  </button>
    )
  }






}
