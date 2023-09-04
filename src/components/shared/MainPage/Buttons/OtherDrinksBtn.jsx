import { Link, useLocation } from "react-router-dom";
// import styles from '../../../index.scss';
import styles from './OtherDrinksBtn.module.scss'

const OtherDrinksBtn = () => {
const location = useLocation();

  return (
    <div className={styles.btn_cont} >
      <Link className={styles.btn} to={`/drinks`} state={{ from: location }} >Other drinks</Link> 
    </div>
        
  );
};
export default OtherDrinksBtn;