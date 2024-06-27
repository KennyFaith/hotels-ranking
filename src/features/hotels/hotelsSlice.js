import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: JSON.parse(localStorage.getItem('hotels')) || [],
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    addHotel(state, action) {
      state.hotels.push(action.payload);
      localStorage.setItem('hotels', JSON.stringify(state.hotels));
    },
    updateHotel(state, action) {
      const index = state.hotels.findIndex(hotel => hotel.id === action.payload.id);
      if (index !== -1) {
        state.hotels[index] = action.payload;
        localStorage.setItem('hotels', JSON.stringify(state.hotels));
      }
    },
    deleteHotel(state, action) {
      state.hotels = state.hotels.filter(hotel => hotel.id !== action.payload);
      localStorage.setItem('hotels', JSON.stringify(state.hotels));
    },
  },
});

export const { addHotel, updateHotel, deleteHotel } = hotelsSlice.actions;
export default hotelsSlice.reducer;
