import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  counterPrice,
  createInitialStateCart,
  getCountProduct,
} from '../../customHook/cartFunctions';
import { checkingProduct } from '../../customHook/useLocalstorage';
import { actionDeleteType, CartItems, CartSliceState } from './type';

const { items, numberOfProduct, price, counter } = createInitialStateCart();
const initialState: CartSliceState = {
  items: items || [],
  numberOfProduct,
  price,
  count: counter,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductsInCart(state, action: PayloadAction<CartItems>) {
      console.log(action.payload);
      state.items = checkingProduct(action.payload, state.items);
      state.count = getCountProduct(state.items);
      state.price = counterPrice(state.items);
    },
    deleteProduct(state, action: PayloadAction<actionDeleteType>) {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (el) => el.id !== id || el.sizes !== size
      );
      state.count = getCountProduct(state.items);
      state.price = counterPrice(state.items);
    },
  },
});

export const { deleteProduct, addProductsInCart } = cartSlice.actions;
export default cartSlice.reducer;
