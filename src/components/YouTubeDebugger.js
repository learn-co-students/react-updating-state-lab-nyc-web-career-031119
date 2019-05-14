import React, {Component} from 'react';

class YouTubeDebugger extends Component {

  state = {
    errors:   [],
    user:     null,
    settings: {
      bitrate: 8,
      video:   {
        resolution: '1080p'
      }
    }
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  };

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  };

  render() {
    return (
      <div>
<button onClick={this.handleBitrate} className={'bitrate'}> </button>
<button onClick={this.handleResolution} className={'resolution'}> </button>
      </div>
    );
  }
}

export default YouTubeDebugger
