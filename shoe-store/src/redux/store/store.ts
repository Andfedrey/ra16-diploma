import {
  configureStore,
  type ThunkAction,
  type Action,
} from '@reduxjs/toolkit';
import shoes from '../top-shoes/slices';
import categories from '../categories/slice';
import catalogShoes from '../shoes/slice';
import product from '../product/slice';
import search from '../search/slice';
import cart from '../cart/slice';

export const store = configureStore({
  reducer: {
    shoes,
    categories,
    catalogShoes,
    product,
    search,
    cart,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
