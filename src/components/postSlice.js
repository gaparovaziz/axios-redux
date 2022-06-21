import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const loadPosts = createAsyncThunk('postsload', async (arg, thunkAPI) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
})

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [loadPosts.fulfilled]: (state,action) => {
      state.posts = action.payload
    }
  }
})

export default postSlice.reducer;