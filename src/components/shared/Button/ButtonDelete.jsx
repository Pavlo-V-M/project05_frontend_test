import styles from './button.module.scss';
const ButtonDelete = ({ type = 'submit', children }) => {
  return (
    <button className={styles.delete} type={type}>
      {children}
    </button>
  );
};

export default ButtonDelete;
