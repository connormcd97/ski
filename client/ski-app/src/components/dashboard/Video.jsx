import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';

class App extends Component {



  render () {
    console.log(this.props);
    let link=''

    if(this.props.vid==='NH'){
      link="https://www.youtube.com/watch?v=l9y4voljpTw"
    }
    if(this.props.vid==='CO'){
      link="https://www.youtube.com/watch?v=FADfoClTDy8"
    }
  

    return <ReactPlayer url={link} paused />
  }
}
export default App;
