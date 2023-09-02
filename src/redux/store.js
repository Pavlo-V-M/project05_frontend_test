import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';

// import { recipesReducer } from './recipes/recipes-slice'; <=== Від Юлі
// Від Юлі ===> const store = configureStore({
//   reducer: recipesReducer,
// });
// export default store; <==== Від Юлі

const store = configureStore({
    reducer: {
        auth: authReducer
    },
});

export default store;
