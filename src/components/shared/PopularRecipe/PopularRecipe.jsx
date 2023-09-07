import { useEffect } from 'react';
import styles from './PopularRecipe.module.scss';
import { getPopularRecipes } from './popularRecipesApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState(null);
  useEffect(() => {
    async function receiveData() {
      try {
        const recipes = await getPopularRecipes();
        await setPopularRecipes(recipes);
      } catch (error) {
        console.log(error.message);
      }
    }
    receiveData();
  }, []);

  // Add code for open PAGE!!!
  const linkClick = event => {
    console.log(event.target.id);
    // Logic for open recipe with id
  };

  return (
    <>
      <div className={styles.popular}>
        <h3 className={styles.popularTitle}>Popular recipe</h3>
        {popularRecipes ? (
          <ul className={styles.popularList} onClick={linkClick}>
            {popularRecipes.map(data => {
              return (
                <li className={styles.popularItem} key={data._id}  id={data._id}>
                  <Link className={styles.popularLink} to={`/recipe/${data._id}`}>
                  <img
                    src={data.drinkThumb}
                    alt="Recipe`sPhoto"
                    width={90}
                    className={styles.popularPhoto}
                    id={data._id}
                  />
                  <div id={data._id}>
                    <h4 className={styles.popularSubTitle} id={data._id}>
                      {data.drink}
                    </h4>
                    <p className={styles.popularInstruction} id={data._id}>
                      {data.instructions}
                    </p>
                  </div></Link>
                  
                </li>
              );
            })}
          </ul>
        ) : (
          <div>Not found any popular recipes</div>
        )}
      </div>
    </>
  );
};

export default PopularRecipes;
