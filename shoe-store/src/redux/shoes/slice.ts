import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchCatalogShoes } from './asyncAction';
import { Status, type CatalogShoesSlice, ShoesInterface } from './types';

const initialState: CatalogShoesSlice = {
  items: [],
  status: Status.LOADING,
  oneItem: null,
};

const catalogShoesSlice = createSlice({
  name: 'catalogShoes',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<ShoesInterface[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCatalogShoes.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCatalogShoes.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      if (action.payload) {
        state.items = action.payload[1];
        state.oneItem = action.payload[0];
      } else {
        state.items = [];
        state.oneItem = null;
      }
    });
    builder.addCase(fetchCatalogShoes.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItem } = catalogShoesSlice.actions;
export default catalogShoesSlice.reducer;
