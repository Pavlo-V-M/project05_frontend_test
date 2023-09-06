// export const getMyFavorites = store => {

//     return store.recipes.items.filter(({ favorite }) => favorite)
// }				
// export const getFavPage = store=> store.page;	

export const getMyFavorites = state => state.favorites.items;