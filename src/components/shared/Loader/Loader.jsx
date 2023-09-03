import { LiaCocktailSolid } from 'react-icons/lia';
import sass from './Loader.module.scss';

const Loader = ({ size, color = '#fffff' }) => {
  return (
    <div className={sass.wrapper}>
      {/* <LiaCocktailSolid size={size} color={color} className={sass.icon} /> */}
    </div>
  );
};

export default Loader;