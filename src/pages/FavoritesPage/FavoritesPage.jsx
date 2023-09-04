import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import  MainPageTitle  from 'components/shared/MyPageTitle/MyPageTitle';
import NoFavoriteCocktail from 'components/FavoritesPage/NoFavoriteCocktail';
import MyRecipes from 'components/shared/MyRecipes/MyRecipes';
import { getMyFavorites, getFavPage } from 'redux/favoriteCocktails/favorites-selectors';
import { fetchFavorites, deleteFavorites } from 'redux/favoriteCocktails/favorites-operations';
import { changeFavPage } from 'redux/favoriteCocktails/favorites-slice';
import Container from 'components/shared/Footer/Container';
// import MyFavorites from 
const FavoritesPage = () => {
  const favorites = useSelector(getMyFavorites);
  const page = useSelector(getFavPage);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites(page));
  }, [dispatch, page]);
  return (
    
        <Container>
          <MainPageTitle text="Favorites" />
          {favorites?.length === 0 ? (
          <NoFavoriteCocktail title="You haven't added any favorite cocktails yet" />
        ): (
        <>
          <MyRecipes recipes={favorites?.data} state={{ from: location }} onDelete={deleteFavorites} />
        </>
        /* <>
          <MyRecipes recipes={favorites?.data} state={{ from: location }} onDelete={deleteFavorites} />
          {favorites.count.totalPages > 1 && <Paginator pages={favorites.count} onChangePage={changeFavPage} />}
        </> */
      )}
        </Container> 
    )
}

export default FavoritesPage;
