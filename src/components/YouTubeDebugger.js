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
  };

  handleClick = (e) => {
    e.persist();
    console.log(e.target.className);
    if(e.target.className === 'bitrate'){
      this.setState({
        settings: {
          ...this.state.settings, bitrate: 12
        }
      })
    } else {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      })
    }//end conditional
    // console.log(this.state.settings.bitrate);
    // console.log(this.state.settings.video.resolution);
  };

  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.handleClick}>Change Bitrate</button>
        <button className='resolution' onClick={this.handleClick}>Change Resolution</button>
      </div>
    )
  };
};

export default YouTubeDebugger;
