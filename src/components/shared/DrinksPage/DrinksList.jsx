import styles from './DrinksPage.module.scss';
// import DrinksCard from './DrinksCard';
// import cocktails from './cocktails.json';
import PaginatedItems from './Pagination/Pagination';
import { fetchRecipets } from './Api/getRecipets';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from './redux/filterSlice';
import { setDataRecipets } from './redux/recipetsSlice';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'panding',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Drinkslist = () => {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  useEffect(() => {
    fetchRecipets(1, filterValue)
      .then(data => {
        if (!data) {
          setStatus(STATUS.REJECTED);
          return;
        }
        dispatch(setDataRecipets(data));
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => console.log(error));
  }, [dispatch, filterValue]);

  if (status === 'resolved') {
    return (
      <div className={styles.drinks}>
        <PaginatedItems itemsPerPage={9} />
      </div>
    );
  }
  if (status === 'rejected') {
    <p>ПОВНА ЛАЖА</p>;
  }
};
export default Drinkslist;
