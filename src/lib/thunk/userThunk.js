import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setUser } from "../slice/userSlice";

export const getUser = createAsyncThunk(
  "getdata" ,async(_,{ dispatch ,rejectWithValue})=>{
    try {
      const respone = await axios.get("http://localhost:8080/jp/blog/user");
      if(respone.status === 200){
        dispatch(setUser(respone.data.result.users))
        return respone.data.result.users
      }else{
        console.log("somthing went wrong")
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
})

export const createUser = createAsyncThunk(
  "createUser",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/jp/blog/user", userData);

      if (response.status === 201) {
        dispatch(getUser()); 
        return response.data;
      } else {
        return rejectWithValue("Failed to create user");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ id, ...userData }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:8080/jp/blog/user/${id}`, userData);
      if (response.status === 200) {
        dispatch(getUser());
        return response.data;
      } else {
        return rejectWithValue("Failed to update user");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (userId, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:8080/jp/blog/user/${userId}`);
      if (response.status === 200) {
        dispatch(getUser());
        return response.data;
      } else {
        return rejectWithValue("Failed to delete user");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message ||  error.message);
    }
  }
);