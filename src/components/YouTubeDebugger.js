// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends React.Component{
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

  handleBitClick = () =>{
    this.setState({ ...this.state, settings:{ ...this.state.settings, bitrate:  12}})
  }
  handleResClick = () => {
    this.setState({...this.state, settings:{ ...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}})
  }
  render(){
    console.log(this.state)
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitClick}>Bitrate</button>
        <button className="resolution" onClick={this.handleResClick}>Resolution</button>
      </div>
    )
  }
}
