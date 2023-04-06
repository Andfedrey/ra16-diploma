import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  inputValue: ''
}

const catalogShoesSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addText (state, action) {
      state.inputValue = action.payload
    }
  }

})

export const { addText } = catalogShoesSlice.actions
export default catalogShoesSlice.reducer
