import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyRecipes } from '../../../../redux/recipes/recipes-selectors';
import {
  fetchRecipes,
  deleteRecipes,
} from '../../../../redux/recipes/recipes-operations';
import { Link } from 'react-router-dom';
import ButtonDelete from '../../Button/ButtonDelete';
import styles from './recipeList.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';

const RecipeList = () => {
  const items = useSelector(getMyRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const onDeleteRecipes = _id => {
    dispatch(deleteRecipes(_id));
  };
console.log(items)
  const elements =
    items &&
    items.map(({ _id, drinkThumb, drink, describe }) => (
      <li key={_id} className={styles.item}>
        <img src={drinkThumb} alt="cocktail" className={styles.picture}></img>
        <h2 className={styles.coctailName}>{drink} </h2>
        <p className={styles.text}>ingredients</p>
        <p className={styles.description}>{describe}</p>
        <div className={styles.btns}>
          <Link className={styles.btn} to={`/recipe/${_id}`}>
            See recipe
          </Link>
          <ButtonDelete id={_id} onDeleteRecipes={onDeleteRecipes}>
            <RiDeleteBin6Line className={styles.iconDelete} />
          </ButtonDelete>
        </div>
      </li>
    ));

  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};
export default RecipeList;
