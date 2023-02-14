import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭하여 시작하세요',
    result: []
  };

  onClickScreen = () => {

  }

  renderAverage = () => {
    const {result} = this.state;
    return result.length === 0
      ? null
      : <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={this.onReset}>리셋</button>
      </>
  };

  render() {
    const { state, message } = this.state; 
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
      </>
    )
  }
}

export default ResponseCheck;
