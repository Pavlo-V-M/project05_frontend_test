import styles from '../../AddRecipeForm/RecipePreparation/RecipePreparation.module.scss';

const RecipePreparation = () => {
  return (
      <div>
        <h3 className={styles.recipePrepTitle}>Recipe preparation</h3>
        <div className={styles.wrap}>
          <label>
            <textarea className={styles.textArea}
              type="text"
              placeholder="Enter the recipe"
              pattern=""
              title=""
              required
            />
          </label>
          <button className={styles.recipePrepBtn} type="submit">Add</button>
        </div>
      </div>
  )
};

export default RecipePreparation;