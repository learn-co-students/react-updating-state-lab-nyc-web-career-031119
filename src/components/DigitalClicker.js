import React from 'react';

class DigitalClicker extends React.Component {
 state = {
   timesClicked: 0
 };

 click = () => {
   let clicks = this.state.timesClicked;
   this.setState({
     timesClicked: clicks += 1
   })
 };

 render(){
   return (
     <button label={`${this.state.timesClicked}`} onClick={this.click}>{`${this.state.timesClicked}`}</button>
   )
 }
};

export default DigitalClicker;
