import React from 'react';

export default class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  plusPlus = () => {
    this.setState((prevState) => {
      // i am inside the current state and what i return will be the object that is to be return
      return {timesClicked: ++prevState.timesClicked}
    })
  }

  render() {
    return (
      <button onClick={this.plusPlus}>{this.state.timesClicked}</button>
    )
  }
}
