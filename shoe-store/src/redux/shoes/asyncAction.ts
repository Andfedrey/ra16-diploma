import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamsInterface } from './types';

export const fetchCatalogShoes = createAsyncThunk(
  'shoes/fetchCatalogShoes',
  async (params: ParamsInterface, { rejectWithValue }) => {
    const categories = params.categories || 0;
    const offset = params.offset || 0;
    const q = params.q || '';
    const id = params.id || '';
    try {
      const reponses = await Promise.all([
        fetch(`http://localhost:7070/api/items/${id}`),
        fetch(
          `http://localhost:7070/api/items?categoryId=${categories}&offset=${offset}&q=${q}`
        ),
      ]);
      const dataArr = await Promise.all(
        reponses.map(async (el) =>{ 
          const result = await el.json()
          return result
        })
      );
      return dataArr;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  }
);
