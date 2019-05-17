import React from 'react';

export default class YouTubeDebugger extends React.Component {
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

  plusFour = (prevState) => {
    this.setState( prevState => {
       return  {settings:
         {bitrate: prevState.settings.bitrate += 4}
       }
    })
  }

  render() {
    console.log(this.state);
    return (
      <button className="bitrate" onClick={this.plusFour}>{this.state.settings.bitrate}</button>
    )
  }
}
