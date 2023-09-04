import { Link } from 'react-router-dom';
import ButtonDelete from '../../Button/ButtonDelete';
import styles from './recipeList.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';

const RecipeList = ({ items, onDeleteRecipes }) => {
  const elements =
    items &&
    items.map(({ _id, drinkThumb, drink, describe }) => (
      <li key={_id} className={styles.item}>
        <img src={drinkThumb} alt="cocktail" className={styles.picture}></img>
        <h2 className={styles.coctailName}>{drink} </h2>
        <p className={styles.text}>ingredients</p>
        <p className={styles.description}>{describe}</p>
        <div className={styles.btns}>
          <Link className={styles.btn} to={`/recipe/:${_id}`}>
            See recipe
          </Link>
          <ButtonDelete id={_id} onClick={() => onDeleteRecipes(_id)}>
            <RiDeleteBin6Line className={styles.iconDelete} />
          </ButtonDelete>
        </div>
      </li>
    ));

  return (
    <>
      {/* {isLoading && <p>....Loading</p>}
      {error && <p className={styles.error}>{error}</p>} */}
      <ul className={styles.list}>{elements}</ul>;
    </>
  );
};
export default RecipeList;
