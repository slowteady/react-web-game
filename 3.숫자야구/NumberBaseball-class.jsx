import React, { Component, createRef } from 'react';
import Try from './Try-class';

// 숫자 4개를 랜덤으로 출력해주는 함수
function getNumbers() {
  const cadidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i++) {
    const chosen = cadidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}
class NumberBaseball extends Component {
  state = {
    value: '',
    result: '',
    answer: getNumbers(),
    tries: []
  };

  onSubmitForm = (e) => {
    const { value, answer, tries } = this.state;
    e.preventDefault();
    if(value === answer.join('')) { // 성공
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: value, result: '홈런!' }]
        }
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: []
      });
      this.inputRef.current.focus();
    } else { // 실패
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9) { // 10번 이상 시도했을 시
        this.setState({
          result: `시도는 10번까지 가능합니다! 답은 ${answer.join(',')}였습니다!`
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: []
        });
        this.inputRef.current.focus();
      } else {
        for(let i = 0; i < 4; i++) {
          if(answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
            value: ''
          }
        });
        this.inputRef.current.focus();
      }
    }
  }

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  inputRef = createRef();

  render() {
    const { result, tries, value } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={value} onChange={this.onChangeInput} ref={this.inputRef} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
            );
          })}
        </ul>
      </>
    )
  }
}

export default NumberBaseball;