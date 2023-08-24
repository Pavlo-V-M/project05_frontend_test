import styles from './myPageTitle.module.scss';

const MainPageTitle = ({ text }) => {
  return <h1 className={styles.mainTitle}>{text}</h1>;
};
export default MainPageTitle;
