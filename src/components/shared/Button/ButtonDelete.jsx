import styles from '../MyRecipes/RecipeList/recipeList.module.scss';

const ButtonDelete = ({ id, type = 'submit', onDeleteRecipes, children }) => {
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
