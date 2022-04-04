import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/photoService";

const initialState = {
  photos: [],
  photo: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// Publish an user's photo
export const publishPhotoo = createAsyncThunk(
  "photo/publish",
  async (photo, thunkAPI) => {
    const data = await photoService.publishPhotoo(photo);

    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const photoSlice = createSlice({
  name: "publish",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(publishPhotoo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(publishPhotoo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photo = action.payload;
      })
      .addCase(publishPhotoo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.photo = null;
      });
  },
});

export const { reset } = photoSlice.actions;
export default photoSlice.reducer;
