import { nanoid } from 'nanoid';
import { fetchCategories } from './Api/getCategories';
import styles from './DrinksPage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from './redux/filterSlice';
import { Link, useLocation } from 'react-router-dom';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'panding',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Categories = () => {
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

  // const chooseCategory = e => {
  //   console.log(e);
  //   dispatch(setFilterValue(e));
  // };

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
              onClick={() => dispatch(setFilterValue(item.category))}
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

export default Categories;
