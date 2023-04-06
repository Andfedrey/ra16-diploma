import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Shoes } from '../top-shoes/types'
export const fetchCatalogShoes = createAsyncThunk<Shoes[]>(
  'shoes/fetchCatalogShoes',
  async (params, { rejectWithValue }) => {
    const categories = params?.categories || 0
    const offset = params?.offset || 0
    const q = params?.q || ''
    const id = params?.id || ''
    try {
      const reponses = await Promise.all([
        fetch(`http://localhost:7070/api/items/${id}`),
        fetch(`http://localhost:7070/api/items?categoryId=${categories}&offset=${offset}&q=${q}`)])
      const dataArr = await Promise.all(reponses.map(async el => await el.json()))
      return [dataArr[0], dataArr[1]]
    } catch (e: unknown) {
      if (e instanceof Error) { return rejectWithValue(e.message) }
    }
  }
)
