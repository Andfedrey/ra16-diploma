import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  status: true
}

const shoesSlice = createSlice({
  name: 'shoes',
  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload
    }
  }
})

export const {setItem} = shoesSlice.actions;
export default shoesSlice.reducer;