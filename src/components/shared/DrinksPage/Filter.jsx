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
import { fetchRecipets } from './Api/getRecipets';
import { setDataRecipets } from './redux/recipetsSlice';

const Filter = () => {
  const [isSelectOpenIngridients, setIsSelectOpenIngridients] = useState(false);
  const [isSelectOpenCategories, setIsSelectOpenCategories] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const submitForm = e => {
    e.preventDefault();
    if (inputValue === '') {
      alert('Please enter a valid name !');
      return;
    }
    dispatch(setFilterValue(inputValue));
    fetchRecipets(1, inputValue)
      .then(data => {
        console.log(data);
        dispatch(setDataRecipets(data));
      })
      .catch(error => console.log(error));

    dispatch(setInputValue(''));
  };

  const checkSelectOpenIngridients = () => {
    if (!isSelectOpenIngridients) {
      setIsSelectOpenIngridients(true);
      fetchIngredients();
    } else {
      setIsSelectOpenIngridients(false);
    }
  };
  const checkSelectOpenCategories = () => {
    if (!isSelectOpenCategories) {
      setIsSelectOpenCategories(true);
      fetchCategories();
    } else {
      setIsSelectOpenCategories(false);
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
          All categories
          <Vector className={styles.btn_svg} stroke="#F3F3F3" />
        </button>
        {isSelectOpenCategories && <Categories />}
      </div>

      <div className={styles.select}>
        <button
          className={styles.select_btn}
          onClick={() => checkSelectOpenIngridients()}
        >
          Ingredients
          <Vector className={styles.btn_svg} stroke="#F3F3F3" />
        </button>
        {isSelectOpenIngridients && <Ingredients />}
      </div>
    </div>
  );
};

export default Filter;
