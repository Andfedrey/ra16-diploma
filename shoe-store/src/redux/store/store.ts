import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shoes from '../shoes/slices'

export const store = configureStore({
  reducer: {
    shoes
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
