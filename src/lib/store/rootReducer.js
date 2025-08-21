
import { combineReducers } from "@reduxjs/toolkit";
import { userApi } from "../slice/userSlice"
const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;