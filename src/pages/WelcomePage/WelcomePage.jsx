import { Link } from 'react-router-dom';
import css from './welcome-page.module.scss';
const Welcome = () => {
  return (
    <div className={css.welcome_page}>
      <div className={css.welcome_form}>
        <h1 className={css.welcome_title}>Welcome to the app!</h1>
        <p className={css.welcome_text}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div className={css.button_form}>
          <button className={css.registration_button}>
            <Link to="/registration">Registration</Link>
          </button>

          <button className={css.signin_button}>
            <Link to="/signin">Sign in</Link>
          </button>
        </div>
      </div>

      <div className={css.image_half}></div>
    </div>
  );
};
export default Welcome;
