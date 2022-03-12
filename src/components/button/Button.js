import styles from './Button.module.css';

function Button(props) {

  function onBtnClickHandler() {
    if (props.btnText === "Apply") {
      props.colorApply();
    } else {
      props.onCounterChange(props.btnText);
    }
  }

  return (
    <>
      <button className={styles['custom-btn']} onClick={onBtnClickHandler}>
        {props.btnText}
      </button>
    </>
  );
}

export default Button;