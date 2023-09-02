import { fetchCategories } from './Api/getCategories';
import styles from './DrinksPage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from './redux/filterSlice';

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
  useEffect(() => {
    setStatus(STATUS.PENDING);
    // if (!items) {
    //   setStatus(STATUS.REJECTED);
    //   return;
    // }
    fetchCategories()
      .then(data => {
        setItems(data);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => console.log(error));
  }, [dispatch, setItems, setStatus]);

  const chooseCategory = e => {
    dispatch(setFilterValue(e.target.innerHTML));
  };

  return (
    status === 'resolved' && (
      <ul className={styles.category_list}>
        {items.map(item => (
          <li
            onClick={e => chooseCategory(e)}
            className={styles.category_item}
            key={item._id}
          >
            {item.category}
          </li>
        ))}
      </ul>
    )
  );
};

export default Categories;
