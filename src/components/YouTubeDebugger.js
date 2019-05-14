// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  handleClick = (e) => {
    e.persist();
    if (e.target.className === "bitrate") {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    } else if (e.target.className === "resolution") {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      })
    }
  }

  render() {
    // console.log("bitrate:", this.state.settings.bitrate);
    // console.log("resolution", this.state.settings.video.resolution)
    console.log(this.state);
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>Bitrate</button>
        <button className="resolution" onClick={this.handleClick}>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
