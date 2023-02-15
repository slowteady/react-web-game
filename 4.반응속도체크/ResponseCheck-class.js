import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭하여 시작하세요',
    result: []
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state } = this.state;
    if(state === 'waiting') {
      timeout.current = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭!'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요!'
      });
    } else if(state === 'ready') { // 잘못 클릭 했을 때
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 일찍 클릭하셨어요!!!!! 하지만 빨랐죠?'
      });
    } else if(state === 'now') {
      endTime.current = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭하여 시작하세요!',
          result: [...prevState.result, this.endTime, this.startTime]
        }
      });
    }
  }

  onReset = () => {
    this.setState({
      result: [],
    });
  };

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
