import { configureStore } from "@reduxjs/toolkit"
import postSlice from "./postSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    posts: postSlice
  }
})

export default store;