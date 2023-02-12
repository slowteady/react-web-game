import React, { Component } from 'react';
import Try from './Try-class';

// 숫자 4개를 랜덤으로 출력해주는 함수
function getNumbers() {

}
class NumberBaseball extends Component {
  state = {
    value: '',
    result: '',
    answer: getNumbers(),
    tries: []
  };

  onSubmitForm = (e) => {
    
  }
  onChangeInput = (e) => {

  }
  setList = () => {
    const array = ['사과', '바나나', '포도', '귤'];
    array.map((v, i) => {
      <Try tryInfo={v} index={i} />
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.setList}
        </ul>
      </>
    )
  }
}

export default NumberBaseball;