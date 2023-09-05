import styles from '../../shared/RecipePreparation/RecipePreparation.module.scss';

const RecipePreparation = () => {
  return (
    <>
      <div className="container">
        <h3 className={styles.recipePrepTitle}>Recipe preparation</h3>
        <form className={styles.wrap}>
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
        </form>
      </div>
    </>
  )
};

export default RecipePreparation;