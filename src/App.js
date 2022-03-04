import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/button/Button';
import CustomCard from './components/card/CustomCard';
import InputBox from './components/inputbox/InputBox';

function App() {

  const [counter, setCounter] = useState(0);

  function changeCounter(key) {
    if (key === "Increment") {
      setCounter(prevCount => prevCount + 1);
    } else if (key === "Decrement") {
      setCounter(prevCount => prevCount - 1);
    } else {
      setCounter(prevCount => prevCount * 0);
    }
  }

  return (
    <div className={styles['main-box']}>
      <CustomCard count={counter} ></CustomCard>
      <hr></hr>
      <div className={styles['action-btns']}>
        <Button btnText="Increment" onCounterChange={changeCounter}></Button>
        <Button btnText="Decrement" onCounterChange={changeCounter}></Button>
        <Button btnText="Reset" onCounterChange={changeCounter}></Button>
      </div>
      <hr></hr>
      <InputBox name="forground" text="Text Color:"></InputBox>
      <InputBox name="background" text="Background Color:"></InputBox>
    </div>
  );
}

export default App;
