import React, {Component} from 'react';

class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  };

  add = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker
