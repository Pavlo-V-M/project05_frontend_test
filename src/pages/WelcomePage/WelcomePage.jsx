import { Link} from "react-router-dom";
import css from './welcome-page.module.scss';
const Welcome = ()=> {
    return(
       
            <div className={css.welcome_page}>
             
            <div className={css.welcome_form}>
                <h1 className={css.welcome_title}>Welcome to the app!</h1>
                <p className={css.welcome_text}>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</p>
            <div className={css.button_form}>

            <Link to={`/registration`} >
                <button className={css.registration_button} type="button">         
             Registration
            </button>
            </Link>
            <Link to={`/signin`} >
                <button className={css.signin_button} type="button">
                  
            Sign in
            </button>
            </Link>

            </div>
            </div>
            
            
            <div className={css.image_half}>

            </div>
            
            </div>
       
    )
}
export default Welcome;



// import { Link } from 'react-router-dom';
// import styles from "./welcome-page.module.scss";
// // import css from "./welcome-page.module.scss";

// const WelcomePage = ()  => {
//   return (
//     <div>
//       <div className={styles.welcome_form}> 
//         <h1 className={styles.title}>Welcome to the app!</h1> 
//         <p>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</p> 
//         <div className={styles.button_form}> 
//           <Link to="/registration" className={styles.sign_button}>          
//             Registration 
//           </Link> 
//           <Link to="/signin" className={styles.sign_button}> 
//             Sign in 
//           </Link> 
//         </div> 
//       </div> 
//       <div> 
//         <div className={styles.image_half}></div> 
//       </div>
//     </div>
//   )
// }

// export default WelcomePage;