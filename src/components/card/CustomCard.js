// import ReactDOM from 'react-dom';
import styles from './CustomCard.module.css';

function CustomCard(props) {

  const bgColor = props.bgColor ? props.bgColor : "#000000";
  const textColor = props.textColor ? props.textColor : "#ffffff";

  return (
    <div className={styles['card-box']} style={{ 'backgroundColor': bgColor }}>
      <span style={{ 'color': textColor }}>{props.count}</span>
    </div>
  );
}

export default CustomCard;