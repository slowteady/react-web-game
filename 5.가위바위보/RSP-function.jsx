import React, { useState, useRef, useEffect } from 'react';

const rspCords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
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

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCord, setImgCord] = useState(rspCords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(changeHand, 300);
    return () => {
      clearInterval(interval.current);
    }
  }, [imgCord]);

  const changeHand = () => {
    if(imgCord === rspCords.바위) {
      setImgCord(rspCords.가위);
    } else if(imgCord === rspCords.가위) {
      setImgCord(rspCords.보);
    } else if(imgCord === rspCords.보) {
      setImgCord(rspCords.바위);
    }
  };

  const onClickBtn = (choice) => () => {
    if(interval.current) {
      clearInterval(interval.current);
      interval.current = null;
      const myScore = scores[choice];
      const computerScore = scores[computerChoice(imgCord)];
      const diff = myScore - computerScore;
  
      if(diff === 0) {
        setResult('비겼습니다!');
      } else if([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = setInterval(changeHand, 300);
      }, 2000);
    }
  };

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCord} 0` }} />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  )
}

export default RSP;