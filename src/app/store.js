import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/appSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appSlice,
  },
});
