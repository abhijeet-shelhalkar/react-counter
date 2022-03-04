// import ReactDOM from 'react-dom';
import styles from './CustomCard.module.css';

function CustomCard(props) {
  return (
    <div className={styles['card-box']}>
      <span>{props.count}</span>
    </div>
  );
}

export default CustomCard;