import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CategoryInterface, FetchCategoryType } from './types';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetch('http://localhost:7070/api/categories');
      if (!responce.ok) {
        throw new Error(`An error has occurred: ${responce.status}`);
      }
      const data = await responce.json();
      return data;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);
const initialState: CategoryInterface = {
  currentCategoryId: 0,
  types: [],
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    choiseCategories(state, action) {
      state.currentCategoryId = action.payload;
      state.types.forEach((el) =>
        el.id === action.payload ? (el.status = true) : (el.status = false)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.types = action.payload.map((el: FetchCategoryType) => ({
        ...el,
        status: false,
      }));
    });
  },
});

export const { choiseCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
