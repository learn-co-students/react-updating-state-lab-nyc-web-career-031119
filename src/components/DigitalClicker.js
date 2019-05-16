// Code DigitalClicker Component Here
import React, { Component } from 'react';

 export default class DigitalClicker extends Component {

   //initialize state and state attributes
  state = {timesClicked: 0};

   //handler function that updates the states of the timesClicked
  handleClickerClick = () => this.setState( {timesClicked: this.state.timesClicked + 1} )

  render(){
    return(
      <button onClick={this.handleClickerClick}>{this.state.timesClicked}</button>
    )
  }

}
