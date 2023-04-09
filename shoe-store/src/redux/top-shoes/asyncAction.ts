import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Shoes } from './types';

export const fetchShoes = createAsyncThunk<Shoes[]>(
  'shoes/fetchShoes',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetch('http://localhost:7070/api/top-sales');
      if (!responce.ok) {
        throw new Error(`An error has occurred: ${responce.status}`);
      }
      const data = await responce.json();
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);
