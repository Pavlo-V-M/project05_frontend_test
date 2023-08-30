import { Link } from 'react-router-dom';

import ButtonDelete from '../../Button/ButtonDelete';
import styles from './recipeListItem.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
const RecipeListItem = ({
  drinkThumb,
  drink,
  instructions,
  onDeleteRecipe,
}) => {
  return (
    <li className={styles.item}>
      <img src={drinkThumb} alt="coctail" className={styles.picture}></img>
      <h2 className={styles.coctailName}>{drink} </h2>
      <p className={styles.text}>ingredients</p>
      <p className={styles.description}>{instructions}</p>
      <div className={styles.btns}>
        <Link className={styles.btn} to={'/recipesId'}>
          See recipe
        </Link>
        <ButtonDelete onClick={() => onDeleteRecipe}>
          <RiDeleteBin6Line className={styles.iconDelete} />
        </ButtonDelete>
      </div>
    </li>
  );
};
export default RecipeListItem;
