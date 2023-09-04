// import styles from '../../../index.scss';

const Button = ({ type = 'submit', children }) => {
  return <button type={type}>{children}</button>;
};

export default Button;

// import styles from '../../../index.scss';

// const Button = ({ type = 'submit', children }) => {
//   return (
//     <button className={styles.btn} type={type}>
//       {children}
//     </button>
//   );
// };
// export default Button;
