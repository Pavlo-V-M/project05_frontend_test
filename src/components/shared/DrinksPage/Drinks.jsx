import styles from './DrinksPage.module.scss';
import Filter from './Filter';
import DrinksList from './DrinksList';

const Drinks = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Drinks</h1>
      <Filter />
      <DrinksList />
    </div>
  );
};

export default Drinks;
