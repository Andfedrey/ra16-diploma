import { createSlice } from '@reduxjs/toolkit';
import { SearchType } from './types';

const initialState: SearchType = {
  inputValue: '',
};

const catalogShoesSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addText(state, action) {
      state.inputValue = action.payload;
    },
  },
});

export const { addText } = catalogShoesSlice.actions;
export default catalogShoesSlice.reducer;
