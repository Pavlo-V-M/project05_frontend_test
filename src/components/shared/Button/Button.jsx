import styles from './button.module.scss';

// import styles from '../../../index.scss';

const Button = ({ type = 'submit', children }) => {
  return (
    <button className={styles.btn} type={type}>
      {children}
    </button>
  );
};

export default Button;
