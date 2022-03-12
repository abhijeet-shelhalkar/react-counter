import { useRef } from 'react';
import Button from '../button/Button';
import styles from './InputBox.module.css';

function InputBox(props) {

  const inputRef = useRef('');

  function onApplyColorHandler() {
    // console.log("inputRef", inputRef.current.value);
    // console.log("props.name", props.name);
    const inputText = inputRef.current.value;
    props.onChangeColor(inputText, props.name);
  }

  // console.log("rendering input component");

  return (
    <div className={styles['action-items']}>
      <div className={styles['input-box']}>
        <label htmlFor={props.name}>{props.text}</label>
        <input ref={inputRef} type="text" id={props.name} name={props.name}
          placeholder="Enter #Hex color" />
        <div className={styles['btn-box']}>
          <Button btnText="Apply" colorApply={onApplyColorHandler}></Button>
        </div>
      </div>
    </div>
  );
}

export default InputBox;