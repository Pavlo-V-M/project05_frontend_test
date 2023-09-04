import { nanoid } from 'nanoid';
import styles from './DrinksPage.module.scss';
import { fetchIngredients } from './Api/getIngredients';
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

const Ingredients = ({ ingredientValue }) => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const checkCategoryLength = array => {
    const newArray = array.map(({ title }) => {
      if (title.length > 18) {
        const wordArray = title.split(' ');
        wordArray.splice(wordArray.length - 1, 1, '...');
        const newString = wordArray.join(' ');
        return newString;
      } else {
        return title;
      }
    });
    setItems(newArray);
  };

  useEffect(() => {
    setStatus(STATUS.PENDING);
    fetchIngredients()
      .then(data => {
        checkCategoryLength(data);

        setStatus(STATUS.RESOLVED);
      })
      .catch(error => console.log(error));
  }, [setItems, setStatus]);

  const chooseCategory = e => {
    console.log(e.target.innerHTML);
    dispatch(setFilterValue(e.target.innerHTML));
    ingredientValue(e.target.innerHTML);
  };

  return (
    status === 'resolved' && (
      <div className={styles.ingredients_box}>
        <ul className={styles.ingredients_list}>
          {items.map(item => (
            <Link
              className={styles.category_link}
              to={`/drinks/${item}`}
              state={{ from: location }}
              key={nanoid()}
            >
              <li
                onClick={e => chooseCategory(e)}
                className={styles.category_item}
                key={nanoid()}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  );
};
Ingredients.propTypes = {
  ingredientValue: PropTypes.string.isRequired,
};
export default Ingredients;
