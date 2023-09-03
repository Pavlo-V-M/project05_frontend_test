import styles from './DrinksPage.module.scss';
import PaginatedItems from './Pagination/Pagination';
import { fetchRecipets } from './Api/getRecipets';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from './redux/filterSlice';
import { setDataRecipets } from './redux/recipetsSlice';
import { setPaginateValue } from './redux/pagePaginateSlice';
import { useParams } from 'react-router-dom';

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
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      fetchRecipets(1, categoryName)
        .then(data => {
          if (!data) {
            setStatus(STATUS.REJECTED);
            return;
          }
          dispatch(setDataRecipets(data));
          dispatch(setPaginateValue(0));
          setStatus(STATUS.RESOLVED);
        })
        .catch(error => console.log(error));
    }
    fetchRecipets(1, ' ')
      .then(data => {
        if (!data) {
          setStatus(STATUS.REJECTED);
          return;
        }
        dispatch(setDataRecipets(data));
        dispatch(setPaginateValue(0));
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => console.log(error));
  }, [categoryName, dispatch, filterValue]);

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
