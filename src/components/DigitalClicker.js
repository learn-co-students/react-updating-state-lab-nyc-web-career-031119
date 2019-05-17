// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
state = {
    timesClicked: 0
}

handClick= (e)=>{
    // console.log(e.target)
    this.setState({
        timesClicked: this.state.timesClicked + 1
    })
}

    render() {
        return (
            <div>
                <button onClick={(e)=>this.handClick(e)}>
                    {this.state.timesClicked}
                </button>
                {/* <p>{this.state.timesClicked}</p> */}
            </div>
        );
    }
}

export default DigitalClicker;
