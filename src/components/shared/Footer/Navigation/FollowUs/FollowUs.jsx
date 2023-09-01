import LogoAndName from '../../../LogoAndName/LogoAndName';

import css from "./foolowUs.module.scss"

import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoYoutube,
} from 'react-icons/bi';

const FollowUs = () => {
  return (
      <div className={css.followUs}>
          <LogoAndName />
        
          <ul className={css.followUsList}>
            <li>
              <a 
                className={css.socialsLink}
                href="https://facebook.com" 
                target="_blank"   
                rel="noopener noreferrer"
                >
                <BiLogoFacebook className={css.socialsIcon}/>
              </a>
            </li>
            <li>
              <a 
                className={css.socialsLink}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoInstagramAlt className={css.socialsIcon} />
              </a>
            </li>
            <li>
              <a 
                className={css.socialsLink}
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BiLogoYoutube className={css.socialsIcon} />
              </a>
            </li>
          </ul>
    </div>
  );
};

export default FollowUs;