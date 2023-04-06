import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { counterPrice, createInitialStateCart, getCountProduct } from '../../customHook/cartFunctions'
import { checkingProduct } from '../../customHook/useLocalstorage'

const { items, numberOfProduct, price, counter } = createInitialStateCart()

const initialState = {
  items: items || [],
  numberOfProduct,
  price,
  counter: counter || 0
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems (state, action: PayloadAction) {
      state.items = action.payload
    },
    addProductsInCart (state, action: PayloadAction) {
      state.items = checkingProduct(action.payload, state.items)
      state.count = getCountProduct(state.items)
      state.price = counterPrice(state.items)
    },

    deleteProduct (state, action: PayloadAction) {
      const { id, size } = action.payload
      state.items = state.items.filter(el => el.id !== id || el.sizes !== size)
      state.count = getCountProduct(state.items)
      state.price = counterPrice(state.items)
    }
  }
})

export const { setItems, deleteProduct, addProductsInCart } = cartSlice.actions
export default cartSlice.reducer
