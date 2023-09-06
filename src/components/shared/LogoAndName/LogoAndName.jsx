import React from 'react';
import { Link } from 'react-router-dom';
import css from './logoAndName.module.scss';

import { ReactComponent as SiteLogo } from './logo.svg';

const LogoAndName = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Зробить прокрутку плавною
    });
  };

  return (
    <div className={css.link}>
      <Link to="main" className={css.link} onClick={scrollToTop}>
        <SiteLogo className={css.logoImg} />
        <p className={css.logoText}>Drink Master</p>
      </Link>
    </div>
  );
};

export default LogoAndName;
