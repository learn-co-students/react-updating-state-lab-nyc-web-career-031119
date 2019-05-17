// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    state= {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
      bitFunc=(e)=>{
        //   console.log('clicking bit')
          this.setState({
              settings:{
                ...this.state.settings,
                  bitrate: 12
                }
          })
      }

      resFunc=(e)=>{
          console.log('clicking res')

          this.setState({
              settings: {
                  ...this.state.settings,
                  video:{
                    resolution:'720p'
                  }
              }

          })
      }

    render() {
        // console.log(this.state)
        return (
            <div>
                <button className={'bitrate'} onClick={(e)=>this.bitFunc(e)}>
                    {this.state.settings.bitrate}
                </button>

                <button className={'resolution'} onClick={(e)=>this.resFunc(e)}> 
               {this.state.settings.video.resolution} 
                </button>
            </div>
        );
    }
}

export default YouTubeDebugger;

