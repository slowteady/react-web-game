import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'ready',
    message: '클릭하여 시작하세요',
    result: []
  }

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if(state === 'ready') {
      this.setState({
        state: 'waiting',
        message: '초록색이 뜨면 클릭하세요',
      });
    } else if(state === 'waiting') {
      setTimeout(() => {
        this.setState({
          state: 'now',
          message: '클릭!'
        });
      }, Math.floor(Math.random() * 1000) + 2000);
    }
  }

  renderAverage = () => {

  }

  render() {
    const { state, message } = this.state; 
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    )
  }
}

export default ResponseCheck;