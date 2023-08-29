import React from 'react';
import SocialIcon from '../Footer/js/SocialIcon.js';
import css from './logoAndName.module.scss';

const LogoAndName = () => {
  return (
    <div className={css.logo_and_name}>
        <SocialIcon network="logo" className={css.icons}/>
        <p className={css.name}>Drink Master</p>
    </div>
  );
};

export default LogoAndName;
