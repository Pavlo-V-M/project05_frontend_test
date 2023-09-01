import { useState } from 'react';
import styles from './DrinksPage.module.scss';
import Filter from './Filter';
import DrinksList from './DrinksList';
import { useSelector } from 'react-redux';
import { getFilterValue } from './redux/filterSlice';

const Drinks = () => {
  const [value, setvalue] = useState('');
  const filterValue = useSelector(getFilterValue);

  const getSearchName = () => {
    if (filterValue === value) {
      alert('Please enter a new name !');
      return;
    }
    if (filterValue !== value) {
      setvalue(filterValue);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Drinks</h1>
      <Filter onSubmit={getSearchName} />
      <DrinksList searchValue={value} />
    </div>
  );
};

export default Drinks;
