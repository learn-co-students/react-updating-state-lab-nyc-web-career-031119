import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    constructor(props) {
        super(props)
        this.state = {timesClicked: 0}
        console.log(this.state)
    }

    handleCount = () => {
        this.setState(
            {timesClicked: ++this.state.timesClicked}
        ) 
    }
      

    render() {
        return <button className="cell" onClick={this.handleCount}>{this.state.timesClicked}</button>
    }
  

}