// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

  constructor() {
    super()
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

  onClick = () => {
    this.setState({
      settings:{
      ...this.state.settings,
        bitrate: 12
      }
    })
    console.log(this.state)
  }

  onResolutionClik = () => {
    this.setState({
      ...this.state.settings, video:{
         ...this.state.settings.video, resolution: '720p'
      }
    })
    console.log(this.state)
  }

  render() {
    return (
    <div>
      <button className="resolution" onClick={this.onResolutionClik}> </button>
      <button className="bitrate" onClick={this.onClick}> </button>
    </div>
    )
  }





}
