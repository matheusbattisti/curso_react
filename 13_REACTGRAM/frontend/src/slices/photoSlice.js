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
export const publishPhoto = createAsyncThunk(
  "photo/publish",
  async (photo, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.publishPhoto(photo, token);

    console.log(data.errors);
    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Get user photos
export const getUserPhotos = createAsyncThunk(
  "photo/userphotos",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.getUserPhotos(id, token);

    console.log(data);
    console.log(data.errors);

    return data;
  }
);

// Get photo
export const getPhoto = createAsyncThunk("photo/getphoto", async (id) => {
  const data = await photoService.getPhoto(id);

  return data;
});

// Delete a photo
export const deletePhoto = createAsyncThunk(
  "photo/delete",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await photoService.deletePhoto(id, token);

    console.log(data.errors);
    // Check for errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// Update a photo
export const updatePhoto = createAsyncThunk(
  "photo/update",
  async (photoData, thunkAPI) => {
    console.log("Teste");

    const token = thunkAPI.getState().auth.user.token;

    console.log("Opa");

    const data = await photoService.updatePhoto(
      { title: photoData.title },
      photoData.id,
      token
    );

    console.log(data);

    console.log(data.errors);
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
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(publishPhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(publishPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photo = action.payload;
        state.photos.unshift(state.photo);
        state.message = "Foto publicada com sucesso!";
      })
      .addCase(publishPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.photo = null;
      })
      .addCase(getUserPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserPhotos.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photos = action.payload;
      })
      .addCase(getPhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhoto.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photo = action.payload;
      })
      .addCase(deletePhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;

        state.photos = state.photos.filter((photo) => {
          console.log(photo._id);
          console.log(action.payload.id);
          console.log(photo._id !== action.payload.id);
          return photo._id !== action.payload.id;
        });

        state.message = action.payload.message;
      })
      .addCase(deletePhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.photo = null;
      })
      .addCase(updatePhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;

        state.photos.map((photo) => {
          if (photo._id === action.payload.photo._id) {
            photo.title = action.payload.photo.title;
          }
        });

        state.message = action.payload.message;
      })
      .addCase(updatePhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.photo = null;
      });
  },
});

export const { resetMessage } = photoSlice.actions;
export default photoSlice.reducer;
