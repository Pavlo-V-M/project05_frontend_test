import { useSelector, useDispatch } from 'react-redux';	
import { useEffect } from 'react';	

// import { useLocation } from 'react-router-dom';		
import { fetchFavorites } from 'redux/favoriteCocktails/favorites-operations';
// import { changeFavPage } from 'redux/favoriteCocktails/favorites-slice';	
import { getMyFavorites } from 'redux/favoriteCocktails/favorites-selectors';
import Container from 'components/shared/Footer/Container';
import MainPageTitle from 'components/shared/MyPageTitle/MyPageTitle';
import NoFavoriteCocktail from 'components/Favorites/NoFavoriteCocktail';
import FavoritesList from 'components/Favorites/FavoritesList';

const FavoritesPage = () => {
    const items = useSelector(getMyFavorites);
    console.log(items.length === 0)
    // const page = useSelector(getFavPage);
    // const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchFavorites());
    }, [dispatch]);			
  return (			
    <Container>			
      <MainPageTitle title="Favorites" />	
    {items.length === 0 ? (			
    <NoFavoriteCocktail title="You haven't added any favorite cocktails yet" />			
    ): (	
    <>			
    <FavoritesList/>				
    </> 	
    )}		 
    </Container> 			
    )			
};

export default FavoritesPage;

/* <MyRecipes recipes={favorites?.data} state={{ from: location }} onDelete={deleteFavorites} />			
    {favorites.count.totalPages > 1 && <Paginator pages={favorites.count} onChangePage={changeFavPage} />}			 */