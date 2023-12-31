import styles from '../styles/DrinksPage.module.scss';
import Filter from '../Filter';
import DrinksList from '../DrinksList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNumberCards } from '../redux/numberCardsSlice';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { useSearchParams } from 'react-router-dom';

const Drinks = () => {
  const [searchParams, setSearchParams] = useSearchParams('');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('drinks');
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
      <Filter setSearchParams={setSearchParams} />
      <DrinksList searchParams={searchParams} />
      <NotificationContainer />
    </div>
  );
};

export default Drinks;
