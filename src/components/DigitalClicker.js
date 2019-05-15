// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  render() {
    return(
      <div>
        <button onClick={ () => {
          const incrementClick = this.state.timesClicked + 1
          this.setState({ timesClicked: incrementClick})
        }}>
          {this.state.timesClicked}
        </button>
      </div>
    )
  }
}

export default DigitalClicker
