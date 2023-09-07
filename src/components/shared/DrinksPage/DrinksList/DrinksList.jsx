import styles from '../styles/DrinksPage.module.scss';
import PaginatedItems from '../Pagination/Pagination';
import { fetchRecipets } from 'components/shared/DrinksPage/Api/getRecipets';
// import { fetchRecipets } from '../../api/DrinkPage/getRecipets';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from '../redux/filterSlice';
import { getNumberCards } from '../redux/numberCardsSlice';
import { setDataRecipets } from '../redux/recipetsSlice';
import { setPaginateValue } from '../redux/pagePaginateSlice';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../../Loader/Loader';

const defaultURL = 'http://localhost:3000/project05_frontend_test/drinks';
const STATUS = {
  IDLE: 'idle',
  PENDING: 'panding',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Drinkslist = ({ searchParams }) => {
  const [status, setStatus] = useState('');
  const [pageCount, setPageCount] = useState(8);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const numberCards = useSelector(getNumberCards);
  const { categoryName } = useParams();

  const params = searchParams.get('query');

  useEffect(() => {
    const handleResize = event => {
      const width = event.target.innerWidth;
      console.log(width);
      if (width < 768) {
        setPageCount(3);
      }
      if (width >= 768) {
        setPageCount(6);
      }
    };
    window.addEventListener('resize', handleResize);
  }, [dispatch]);

  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl === defaultURL) {
      fetchRecipets(1, ' ', numberCards)
        .then(data => {
          console.log('drinrlist');
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

    if (currentUrl !== defaultURL || params) {
      fetchRecipets(1, filterValue, numberCards)
        .then(data => {
          console.log('drinrlist2');
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
  }, [categoryName, dispatch, filterValue, numberCards, params]);

  if (status === 'panding') {
    return <Loader />;
  }

  if (status === 'resolved') {
    return (
      <div className={styles.drinks}>
        <PaginatedItems pageCount={pageCount} />
      </div>
    );
  }
  if (status === 'rejected') {
    return (
      <div className={styles.drinks}>
        <img
          className={styles.drinks_img_error}
          src="../../../images/404.jpg"
          alt="404"
        />
      </div>
    );
  }
};
Drinkslist.propTypes = {
  searchParams: PropTypes.object.isRequired,
};
export default Drinkslist;