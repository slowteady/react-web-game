const React = require('react');
const { useState } = React;

const WordRelay = () => {
  const [word, setWord] = useState('바나나');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  
  const refInput = React.useRef(null);

  const onChangeInput = (e) => {
    setValue(e.currentTarget.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]) {
      setResult('정답!');
      setValue('');
      setWord(value);
      refInput.current.focus();
    } else {
      setResult('땡!');
      setValue('');
      refInput.current.focus();
    }
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={refInput} value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = WordRelay;
