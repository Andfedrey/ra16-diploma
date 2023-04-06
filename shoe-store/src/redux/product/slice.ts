import { createSlice } from '@reduxjs/toolkit'

interface CounterProduct {
  count: number
}
const initialState: CounterProduct = {
  count: 1
}
export const producSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.count = action.payload
    },
    backToInitialValue: (state, action) => {
      state.count = 1
    },
    decrementProduct: (state) => {
      if (state.count > 1) {
        state.count--
      }
    },
    incrementProduct: (state) => {
      if (state.count < 10) {
        state.count++
      }
    }
  }
}
)

export const { setItem, decrementProduct, incrementProduct, backToInitialValue } = producSlice.actions
export default producSlice.reducer
