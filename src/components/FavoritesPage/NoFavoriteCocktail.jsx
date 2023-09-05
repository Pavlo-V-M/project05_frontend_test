import heroCocktailImg from '../../images/imageNotFound.png';			
import heroCocktailImg2x from '../../images/imageNotFound@2x.png';			
import styles from './NoFavoriteCocktail.module.scss';			
			
const NoFavoriteCocktail = ({ title }) => {			
return (			
<section className={styles.wraper}>			
<img			
srcSet={`${heroCocktailImg} 1x, ${heroCocktailImg2x} 2x`}			
src={heroCocktailImg}			
alt="no-favorite-cocktail"			
/>			
<p className={styles.text}>{title}</p>			
</section>			
);			
};			
			
export default NoFavoriteCocktail;			