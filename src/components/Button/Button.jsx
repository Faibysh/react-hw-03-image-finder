import styles from './Button.module.css';

const Button = ({ onLoadMore }) => (
  <button className={styles.more} onClick={onLoadMore}>
    Load more
  </button>
);

export default Button;
