// import {useParams} from 'react-router-dom';




import css from './RecipePage.module.scss';


export const RemoveButton = ({ id, type = 'submit', onDeleteFavorites, children="Remove from favorites" }) => {
    
    return (
      <button
        onClick={() => onDeleteFavorites(id)}
        className={css.add_button}
        type={type}
      >
        {children}
      </button>
    );
  };
  
  
export const AddButton = ({ id, type = 'submit', handleFavButton, children="Add to favorites" }) => {
    
    return (
      <button
        onClick={() => handleFavButton(id)}
        className={css.add_button}
        type={type}
      >
        {children}
      </button>
    );
  };
