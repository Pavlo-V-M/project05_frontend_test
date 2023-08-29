import SocialIcon from '../../js/SocialIcon.js';
import LogoAndName from '../../../LogoAndName/LogoAndName';

import css from "./foolowUs.module.scss"

const FollowUs = () => {
  return (
      <div className={css.follow_us}>
          <LogoAndName className={css.follow_us__logo}/>
        
          <ul className={css.follow_us__icons}>
            <li><a href="https://facebook.com" className={css.social_icon}><SocialIcon network="facebook" className={css.social_icon}/></a></li>
            <li><a href="https://instagram.com" className={css.social_icon}><SocialIcon network="instagram" className={css.social_icon}/></a></li>
            <li><a href="https://youtube.com" className={css.social_icon}><SocialIcon network="youtube" className={css.social_icon}/></a></li>
          </ul>
    </div>
  );
};

export default FollowUs;