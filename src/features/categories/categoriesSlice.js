import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: JSON.parse(localStorage.getItem('categories')) || ['1 Star', '2 Star', '3 Star'],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },
    updateCategory(state, action) {
      const index = state.categories.findIndex(cat => cat === action.payload.old);
      if (index !== -1) {
        state.categories[index] = action.payload.new;
        localStorage.setItem('categories', JSON.stringify(state.categories));
      }
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(cat => cat !== action.payload);
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },
  },
});

export const { addCategory, updateCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
