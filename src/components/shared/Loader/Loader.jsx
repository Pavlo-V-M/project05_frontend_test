import React from 'react';
import CocktailIcon from './coktail.svg';
import scss from './Loader.module.scss'; 

const Loader = () => {
  return (
    <div className={scss.wrapper}>
      <img src={CocktailIcon} alt="Cocktail Icon" className={scss.icon} />
    </div>
  );
};

export default Loader;