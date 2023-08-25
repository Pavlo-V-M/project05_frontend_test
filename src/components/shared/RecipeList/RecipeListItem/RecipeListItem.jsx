import Button from '../../Button/Button';
import ButtonDelete from '../../Button/ButtonDelete';
import styles from './recipeListItem.module.scss';

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
        <Button>See recipe</Button>
        <ButtonDelete onClick={() => onDeleteRecipe} />
      </div>
    </li>
  );
};
export default RecipeListItem;
