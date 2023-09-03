// import items from './categories.json';
import { fetchCategories } from './Api/getCategories';
// import { fetchRecipetsByCaregories } from './Api/getRecipetsByCaregories';
import { fetchRecipets } from './Api/getRecipets';
// import { nanoid } from 'nanoid';
import styles from './DrinksPage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDataRecipets } from './redux/recipetsSlice';
import { setFilterValue } from './redux/filterSlice';
import { setPaginateSlice } from './redux/pagePaginateSlice';

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
    fetchRecipets(1, e.target.innerHTML)
      .then(data => {
        dispatch(setDataRecipets(data));
        dispatch(setPaginateSlice(0));

        setStatus(STATUS.RESOLVED);
      })
      .catch(error => console.log(error));
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
