import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  'shoies/fetchShoes',
  async(params) => {
    const shoes = await fetch(' http://localhost:7070/api/items');
    const {data} = await shoes.json()
    console.log(data, 'it`s data');
  }
)

//  http://localhost:7070/api/items