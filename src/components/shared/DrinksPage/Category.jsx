import { nanoid } from 'nanoid';
import { fetchCategories } from './Api/getCategories';
import styles from './DrinksPage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from './redux/filterSlice';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'panding',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Categories = ({ categoryValue }) => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const checkCategoryString = string => {
    if (string.includes('/')) {
      const wordArray = string.split('');
      const newArray = wordArray.filter(item => item !== '/');
      const newString = newArray.join('');
      return newString;
    } else {
      return string;
    }
  };

  useEffect(() => {
    setStatus(STATUS.PENDING);
    // if (!items) {
    //   setStatus(STATUS.REJECTED);
    //   return;
    // }
    fetchCategories()
      .then(data => {
        checkCategoryString(data);
        setItems(data);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => console.log(error));
  }, [dispatch, setItems, setStatus]);

  const chooseCategory = e => {
    console.log(e.target.innerHTML);
    dispatch(setFilterValue(e.target.innerHTML));
    categoryValue(e.target.innerHTML);
  };

  return (
    status === 'resolved' && (
      <ul className={styles.category_list}>
        {items.map(item => (
          <Link
            className={styles.category_link}
            to={`/drinks/${checkCategoryString(item.category)}`}
            state={{ from: location }}
            key={nanoid()}
          >
            <li
              onClick={e => chooseCategory(e)}
              className={styles.category_item}
              key={nanoid()}
            >
              {item.category}
            </li>
          </Link>
        ))}
      </ul>
    )
  );
};

Categories.propTypes = {
  categoryValue: PropTypes.string.isRequired,
};

export default Categories;
