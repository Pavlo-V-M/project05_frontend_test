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
      <Link to="/" className={css.link} onClick={scrollToTop}>
        <SiteLogo className={css.logoImg} />
      </Link>
      <p className={css.logoText}>Drink Master</p>
    </div>
  );
};

export default LogoAndName;
