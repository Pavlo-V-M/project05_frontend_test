import React from 'react';
import css from './Background.module.scss';

const BackgroundComponent = ({ children }) => {
  return (
    <div className={css.bgContainer}>
      <div className={css.gradient}></div>
      <div className={css.ellipse1}></div>
      <div className={css.ellipse2}></div>
      <div className={css.ellipse3}></div>
      {children}
    </div>
  );
};

export default BackgroundComponent;
