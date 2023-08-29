import Button from "components/shared/Button/Button";
import { Link, useLocation } from "react-router-dom";
import styles from './OtherDrinksBtn.module.scss'

const OtherDrinksBtn = () => {
const location = useLocation();

  return (
    <div className={styles.btn}>
      <Link to={`/drinks`} state={{ from: location }} >{<Button type="button" >Other drinks</Button>}</Link> 
    </div>
        
  );
};
export default OtherDrinksBtn;