import { nanoid } from 'nanoid';
import styles from './DrinksPage.module.scss';
import { fetchIngredients } from './Api/getIngredients';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDataRecipets } from './redux/recipetsSlice';
import { fetchRecipets } from './Api/getRecipets';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'panding',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Ingredients = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
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
    fetchRecipets(1, e.target.innerHTML)
      .then(data => {
        console.log(data);
        dispatch(setDataRecipets(data));
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => console.log(error));
  };
  return (
    status === 'resolved' && (
      <div className={styles.ingredients_box}>
        <ul className={styles.ingredients_list}>
          {items.map(item => (
            <li
              onClick={e => chooseCategory(e)}
              className={styles.category_item}
              key={nanoid()}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Ingredients;
