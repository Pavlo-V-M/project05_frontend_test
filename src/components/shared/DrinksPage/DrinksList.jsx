import styles from './DrinksPage.module.scss';
import PaginatedItems from './Pagination/Pagination';
import { fetchRecipets } from './Api/getRecipets';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from './redux/filterSlice';
import { getNumberCards } from './redux/numberCardsSlice';
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
  const numberCards = useSelector(getNumberCards);
  const { categoryName } = useParams();

  useEffect(() => {
    console.log(numberCards);
    if (categoryName) {
      fetchRecipets(1, categoryName, numberCards)
        .then(data => {
          console.log(data);
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
    fetchRecipets(1, filterValue, numberCards)
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
  }, [categoryName, dispatch, filterValue, numberCards]);

  if (status === 'resolved') {
    return (
      <div className={styles.drinks}>
        <PaginatedItems itemsPerPage={numberCards} />
      </div>
    );
  }
  if (status === 'rejected') {
    <div className={styles.drinks}>
      <img
        className={styles.drinks_img_error}
        src="../../../images/404.jpg"
        alt="404"
      />
    </div>;
  }
};
export default Drinkslist;
