import React, { Component } from "react";

const rspCords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCord) => {
  return Object.entries(rspCords).find(function(v) {
    return v[1] === imgCord;
  })[0];
};

class RSP extends Component {
  state = {
    result: "",
    imgCord: rspCords.바위,
    score: 0,
  };

  interval;

  componentDidMount() { // 컴포넌트 첫 렌더링 직후
    this.interval = setInterval(this.changeHand, 300);
  }

  componentWillUnmount() { // 컴포넌트 제거 직전
    clearInterval(this.interval);
  }

  changeHand = () => {
    const {imgCord} = this.state;
    if(imgCord === rspCords.바위) {
      this.setState({
        imgCord: rspCords.가위
      });
    } else if(imgCord === rspCords.가위) {
      this.setState({
        imgCord: rspCords.보
      });
    } else if(imgCord === rspCords.보) {
      this.setState({
        imgCord: rspCords.바위
      });
    }
  };
  
  onClickBtn = (choice) => () => {
    const {imgCord} = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const computerScore = scores[computerChoice(imgCord)];
    const diff = myScore - computerScore;

    if(diff === 0) {
      this.setState({
        result: '비겼습니다!'
      });
    } else if([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다!',
          score: prevState.score - 1
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 300);
    }, 2000)
  };

  render() {
    const { result, score, imgCord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCord} 0` ,
          }}
        />
        <div>
          <button id="scissor" className="btn" onClick={this.onClickBtn("가위")}> {/* 화살표 함수를 쓰거나 onClickBtn 함수에서 화살표 함수 한번 더 처리*/}
            가위
          </button>
          <button id="rock" className="btn" onClick={this.onClickBtn("바위")}>
            바위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("보")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
