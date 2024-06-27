import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from './features/hotels/hotelsSlice';
import categoriesReducer from './features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    categories: categoriesReducer,
  },
});

export default store;
