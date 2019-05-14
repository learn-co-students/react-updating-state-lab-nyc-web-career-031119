import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

  //initialize initial state values
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  };

  //helper handler function that non-destructively updates state of bitrate
  handleBitrate = () => {this.setState(
    {
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }
  )};

  //helper handler function that non-destructively updates state of resolution
  handleResolution = () => { this.setState(
    {
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    }
  )};

  render(){
    return (
      <div>
       <button className="bitrate" onClick={this.handleBitrate}>Bitrate</button>;
       <button className="resolution" onClick={this.handleResolution}>Resolution</button>;
      </div>
    );
  }
}
