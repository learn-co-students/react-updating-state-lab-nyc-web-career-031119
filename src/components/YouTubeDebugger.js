// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super()
    this.state={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.handleBitrate} className='bitrate'> </button>
        <button onClick={this.handleResolution} className='resolution'> </button>
      </div>

    )
  }

}

export default YouTubeDebugger;
