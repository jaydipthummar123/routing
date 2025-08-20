
import { combineReducers } from "@reduxjs/toolkit";
import useRreducer from "../slice/userSlice"
const rootReducer = combineReducers({
  user: useRreducer,
})

export default rootReducer;