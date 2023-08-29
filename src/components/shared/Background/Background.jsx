import React from 'react';
import css from './Background.module.css'

const BackgroundComponent = () => {
  return (
    <div className={css.background_container}>
      <div className={css.gradient}></div>
      <div className={css.ellipse1}></div>
      <div className={css.ellipse2}></div>
      <div className={css.ellipse3}></div>
      <div className={css.ellipse4}></div>
    </div>
  );
};

export default BackgroundComponent;