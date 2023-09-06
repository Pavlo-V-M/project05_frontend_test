import styles from './FollowUsAdd.module.scss';
import css from '../Footer/Navigation/FollowUs/foolowUs.module.scss';

import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoYoutube,
} from 'react-icons/bi';

const FollowUsAdd = () => {
  return (
    <div className={css.followUs}>
      <p className={styles.titleFollowUs}>Follow Us</p>

      <ul className={css.followUsList}>
        <li>
          <a
            className={css.socialsLink}
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebook className={css.socialsIcon} />
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

export default FollowUsAdd;
