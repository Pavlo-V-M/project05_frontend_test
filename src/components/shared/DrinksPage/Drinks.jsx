import styles from './DrinksPage.module.scss';
import Filter from './Filter';
import DrinksList from './DrinksList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNumberCards } from './redux/numberCardsSlice';

const Drinks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = event => {
      const width = event.target.innerWidth;
      if (width < 1440) {
        dispatch(setNumberCards(10));
      }
      if (width >= 1440) {
        dispatch(setNumberCards(9));
      }
    };
    window.addEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Drinks</h1>
      <Filter />
      <DrinksList />
    </div>
  );
};

export default Drinks;
