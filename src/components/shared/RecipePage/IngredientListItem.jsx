import css from './RecipePage.module.css';
import glass from '../../../images/glass.jpg';


const IngredientListItem = ({
  
    ingredientThumb,
    title,
    measure
  }) => {
    return (
        
      <li className={css.ingredient_item}>

      
        <img  
         
         alt="coctail_ingredient" className={css.ingredient_photo}
          src={ingredientThumb? ingredientThumb: glass}
         />
          
         
          
        <div className={css.ingredient_information}><h2 className={css.ingredient_title}>{title} </h2>
        <p className={css.ingredient_measure}>{measure}</p>
        </div>
         </li>
    );
  };
  export default IngredientListItem;
