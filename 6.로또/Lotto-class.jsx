import React, { Component } from 'react';
import Ball from './Ball-class';

function getWinNumbers() {
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while(candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonus: null,
    redo: false
  }

  timeouts = [];

  runTimeouts = () => {
    const { winNumbers } = this.state;

    for(let i = 0; i < winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]]
          }
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true
      });
    }, 7000);
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      bonus: null, // 보너스 공
      redo: false,
    });
    this.timeouts = [];
  }

  componentDidMount() { // 컴포넌트 첫 렌더링 직후
    this.runTimeouts();
  }

  componentDidUpdate() { // state 변경 시 
    if(this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
  }

  componentWillUnmount() { // 컴포넌트 제거 전
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    });
  }

  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus ? <Ball number={bonus} /> : null}
        {redo ? <button onClick={this.onClickRedo}>리셋</button> : null}
      </>
    )
  }
}

export default Lotto;