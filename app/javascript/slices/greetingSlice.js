import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  greeting: {},
  isLoading: false,
  error: undefined
}

export const fetchgreeting = createAsyncThunk('greeting/fetchgreeting', async() => {
  const greeting = await axios.get('http://127.0.0.1:3000/api/v1/greetings/random')
  console.log(greeting)
  return await greeting.data
} )

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchgreeting.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchgreeting.fulfilled, (state, action) => {
      state.isLoading= false,
      state.greeting = action.payload
    })
    .addCase(fetchgreeting.rejected, (state, action) => {
      state.isLoading = false,
      state.error = action.payload
    })
  }
})


export default greetingSlice.reducer