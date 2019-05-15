// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  state = {timesClicked: 0}

  handleButton = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render () {
    return (
      <button onClick={this.handleButton}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
