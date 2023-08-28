import { Link } from 'react-router-dom';
import css from './WelcomePage.module.css'; 
const Welcome = ()=> { 
    return( 
        <div> 
            <div className={css.welcome_form}> 
                <h1 className={css.title}>Welcome to the app!</h1> 
                <p>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</p> 
                <div className={css.button_form}> 
                    <Link to="/registration" className={css.sign_button}>          
                        Registration 
                    </Link> 
                    <Link to="/signin" className={css.sign_button}> 
                        Sign in 
                    </Link> 
                </div> 
                </div> 
            <div> 
            <div className={css.image_half}></div> 
            </div> 
            </div> 
        
    ) 
} 
export default Welcome;