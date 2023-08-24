import styles from './recipeList.module.scss';

const RecipeList = ({ items, onDeleteRecipe }) => {
  const elements = items.map(({ _id, drinkThumb, drink, instructions }) => (
    <li className={styles.item} key={_id}>
      <img src={drinkThumb} alt="coctail" className={styles.picture}></img>
      <h2 className={styles.coctailName}>{drink} </h2>
      <p className={styles.text}>ingredients</p>
      <p className={styles.description}>{instructions}</p>
      <button className={styles.seeRecipe}>See recipe</button>
      <button onClick={() => onDeleteRecipe}>Delete </button>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};
export default RecipeList;
