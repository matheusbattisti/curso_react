import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  user: {},
  error: false,
  success: false,
  loading: false,
};

// Get user details
export const profile = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    console.log(token);

    const data = await userService.profile(user, token);

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);
