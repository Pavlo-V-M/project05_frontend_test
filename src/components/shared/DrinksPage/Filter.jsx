import React, { useState } from 'react';
import { ReactComponent as Vector } from './svg/Vector.svg';
import { ReactComponent as Search } from './svg/search.svg';
import Categories from './Category';
import Ingredients from './Ingredients';
import styles from './DrinksPage.module.scss';
import { useDispatch } from 'react-redux';
import { setFilterValue } from './redux/filterSlice';
import { fetchCategories } from './Api/getCategories';
import { fetchIngredients } from './Api/getIngredients';
import { useSearchParams } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

const Filter = () => {
  const [isSelectOpenIngridients, setIsSelectOpenIngridients] = useState(false);
  const [isSelectOpenCategories, setIsSelectOpenCategories] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [setSearchParams] = useSearchParams('');
  const [ingredient, setIngredient] = useState('');
  const [category, setCategory] = useState('');
  const [tittleIngridients, setTittleIngridients] = useState(false);
  const [tittleCategories, setTittleCategories] = useState(false);
  const dispatch = useDispatch();

  // console.log(searchParams.get('query'));

  const setCategoryValue = value => {
    setCategory(value);
    setTittleCategories(true);
    setIsSelectOpenCategories(false);

    console.log(tittleCategories);
    if (tittleCategories) {
      setTittleIngridients(false);
    }
  };

  const setIngredientValue = value => {
    setIngredient(value);
    setTittleIngridients(true);
    setIsSelectOpenIngridients(false);
    if (tittleIngridients) {
      setTittleCategories(false);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    if (inputValue === '') {
      NotificationManager.info('Please enter a valid name !', 'Info', 3000);
      return;
    }
    console.log(inputValue);
    setSearchParams({ query: inputValue });
    dispatch(setFilterValue(inputValue));
    setInputValue('');
  };

  const checkSelectOpenIngridients = () => {
    if (!isSelectOpenIngridients) {
      setIsSelectOpenIngridients(true);
      fetchIngredients();
    } else {
      setIsSelectOpenIngridients(false);
      setTittleIngridients(false);
    }
  };
  const checkSelectOpenCategories = () => {
    if (!isSelectOpenCategories) {
      setIsSelectOpenCategories(true);
      fetchCategories();
    } else {
      setIsSelectOpenCategories(false);
      setTittleCategories(false);
    }
  };

  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        <button
          type="submit"
          className={styles.btn_submit}
          onClick={submitForm}
        >
          <Search className={styles.input_svg} stroke="#F3F3F3" />
        </button>

        <input
          className={styles.input}
          type="text"
          name="filter"
          title="Enter the text"
          placeholder="Enter the text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={inputValue}
          onChange={evt => setInputValue(evt.currentTarget.value.toLowerCase())}
        />
      </label>

      <div className={styles.select}>
        <button
          className={styles.select_btn}
          onClick={() => checkSelectOpenCategories()}
        >
          {!tittleCategories ? 'All categories' : `${category}`}
          <Vector className={styles.btn_svg} stroke="#F3F3F3" />
        </button>
        {isSelectOpenCategories && (
          <Categories categoryValue={setCategoryValue} />
        )}
      </div>

      <div className={styles.select}>
        <button
          className={styles.select_btn}
          onClick={() => checkSelectOpenIngridients()}
        >
          {!tittleIngridients ? 'Ingredients' : `${ingredient}`}
          <Vector className={styles.btn_svg} stroke="#F3F3F3" />
        </button>
        {isSelectOpenIngridients && (
          <Ingredients ingredientValue={setIngredientValue} />
        )}
      </div>
    </div>
  );
};

export default Filter;
