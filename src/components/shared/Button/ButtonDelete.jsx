import styles from '../MyRecipes/RecipeList/recipeList.module.scss';

const ButtonDelete = ({ id, type = 'submit', onDeleteRecipes, children }) => {
  console.log(id)
  return (
    <button
      onClick={() => onDeleteRecipes(id)}
      className={styles.delete}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonDelete;
