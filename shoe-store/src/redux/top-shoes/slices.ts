import { createSlice } from '@reduxjs/toolkit'
import { fetchShoes } from './asyncAction'
import { Status, type ShoesSliceState } from './types'

const initialState: ShoesSliceState = {
  items: [],
  status: Status.LOADING,
  error: ''
}

const shoesSlice = createSlice({
  name: 'shoes',
  initialState,
  reducers: {
    setItem (state, action) {
      state.items = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchShoes.pending, (state, action) => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchShoes.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.items = action.payload
    })
    builder.addCase(fetchShoes.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  }
})

export const { setItem } = shoesSlice.actions
export default shoesSlice.reducer
