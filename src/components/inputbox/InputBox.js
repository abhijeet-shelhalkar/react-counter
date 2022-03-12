import { useRef, useState } from 'react';
import Button from '../button/Button';
import styles from './InputBox.module.css';

function InputBox(props) {

  const inputRef = useRef('');
  const [inputColor, setInputColor] = useState(props.color);

  function onApplyColorHandler() {
    console.log("inputRef", inputRef.current.value);
    // console.log("props.name", props.name);
    const inputText = inputRef.current.value;
    props.onChangeColor(inputText, props.name);
  }

  function changeInput(event) {
    console.log("onChange input");
    setInputColor(prevColor => {
      prevColor = event.target.value;
    });
  }

  console.log("rendering input component");

  return (
    <div className={styles['action-items']}>
      <div className={styles['input-box']}>
        <label htmlFor={props.name}>{props.text}</label>
        <input ref={inputRef} type="color" value={inputColor} id={props.name} name={props.name} onChange={changeInput} />
        <div className={styles['btn-box']}>
          <Button btnText="Apply" colorApply={onApplyColorHandler}></Button>
        </div>
      </div>
    </div>
  );
}

export default InputBox;