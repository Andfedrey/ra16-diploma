import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetch('http://localhost:7070/api/categories')
      if (!responce.ok) {
        throw (new Error(`An error has occurred: ${responce.status}`))
      }
      const data = await responce.json()
      return data
    } catch (e) {
      if (e instanceof Error) { return rejectWithValue(e.message) }
    }
  }
)
const initialState = {
  currenCategoryId: 0,
  types: []
}
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    choiseCategories (state, action) {
      state.currenCategoryId = action.payload
      state.types.forEach(el => (el.id === action.payload) ? el.status = true : el.status = false)
    }
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.types = action.payload.map(el => ({ ...el, status: false }))
    }
  }
})

export const { choiseCategories } = categoriesSlice.actions
export default categoriesSlice.reducer
