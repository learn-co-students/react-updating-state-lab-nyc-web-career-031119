// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <button className='bitrate' onClick={ () => {
          this.setState({
            ...this.state,
            settings: {
              ...this.state.settings, bitrate: 12
            }
          })
        }}>
          BitRate
        </button>
        <button className='resolution' onClick={ () => {
          this.setState({
            ...this.state,
              settings: {
                ...this.state.settings,
                  video: {
                    ...this.state.settings.video, resolution: '720p'
                  }
              }
          })
        }}>
          Resolution
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger
