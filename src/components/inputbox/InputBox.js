import { useState } from 'react';
import Button from '../button/Button';
import styles from './InputBox.module.css';

function InputBox(props) {

  const [inputText, setInputText] = useState('');

  function onChangeColor() {
    console.log("apply", inputText);
  }

  function setInputValue(event) {
    setInputText(prevValue => {
      prevValue = event.target.value;
      // console.log("prevValue", prevValue);
    });
  }

  console.log("rendering input component");

  return (
    <div className={styles['action-items']}>
      <form className={styles['input-box']}>
        <label htmlFor={props.name}>{props.text}</label>
        <input type="text" id={props.name} name={props.name}
          placeholder="Enter #Hex color" value={inputText} onChange={setInputValue} />
        <div className={styles['btn-box']}>
          <Button btnText="Apply" onApply={onChangeColor}></Button>
        </div>
      </form>
    </div>
  );
}

export default InputBox;