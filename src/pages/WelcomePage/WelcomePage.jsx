import { Link } from 'react-router-dom';
import styles from "./welcome-page.module.scss";
// import css from "./welcome-page.module.scss";

const WelcomePage = ()  => {
  return (
    <div>
      <div className={styles.welcome_form}> 
        <h1 className={styles.title}>Welcome to the app!</h1> 
        <p>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</p> 
        <div className={styles.button_form}> 
          <Link to="/registration" className={styles.sign_button}>          
            Registration 
          </Link> 
          <Link to="/signin" className={styles.sign_button}> 
            Sign in 
          </Link> 
        </div> 
      </div> 
      <div> 
        <div className={styles.image_half}></div> 
      </div>
    </div>
  )
}

export default WelcomePage;