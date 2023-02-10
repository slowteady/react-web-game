const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
      word: '이용민',
    };

    render() {
      return (
        <>
          <div>${this.state.word}</div>
        </>
      )
    }
}

module.exports = WordRelay;