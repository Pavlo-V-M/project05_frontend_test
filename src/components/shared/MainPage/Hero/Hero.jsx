import Button from "components/shared/Button/Button";
import { Link, useLocation } from "react-router-dom";
import styles from './hero.module.scss'

const Hero = () => {
const location = useLocation();

  return (
    <div className={styles.hero_background}>
      <div className={styles.hero}>
        <h1 className={styles.hero_title}>Craft Your Perfect Drink with Drink Master</h1>
        <p className={styles.hero_text}>Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages.</p>
        <Link to={`/add`} state={{ from: location }} >{<Button type="button" >Add recipe</Button>}</Link>
        
      </div>
    </div>

  );
};
export default Hero;