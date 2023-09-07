import MainPageTitle from '../../components/shared/MyPageTitle/MyPageTitle';
import RecipeDescriptionFields from '../../components/shared/AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields';
import PopularRecipes from '../../components/shared/PopularRecipe/PopularRecipe';
import FollowUsAdd from '../../components/shared/FollowUsAdd/FollowUsAdd';
import styles from './AddRecipePage.module.scss';
const AddRecipePage = () => {
  return (
    <div className="container" >
      <div className={styles.container}>
      <div className={styles.left}>
      <MainPageTitle text="Add recipe" />
      <RecipeDescriptionFields />
      </div>
      <div className={styles.right}>
      <FollowUsAdd />
      <PopularRecipes />
      </div>
      </div>
    </div>
  );
};
export default AddRecipePage;
