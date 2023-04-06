import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchCatalogShoes } from './asyncAction'
import { type Shoes, Status, type CatalogShoesSlice } from './types'

const initialState: CatalogShoesSlice = {
  items: [],
  status: Status.LOADING,
  oneItem: null
}

const catalogShoesSlice = createSlice({
  name: 'catalogShoes',
  initialState,
  reducers: {
    setItem (state, action: PayloadAction<Shoes[]>) {
      state.items = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCatalogShoes.pending, (state, action) => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchCatalogShoes.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      const [product, productsArr] = action.payload
      state.oneItem = product
      state.items = productsArr
    })
    builder.addCase(fetchCatalogShoes.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  }
})

export const { setItem } = catalogShoesSlice.actions
export default catalogShoesSlice.reducer
