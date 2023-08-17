import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileData, ProfileSchema } from '../types/profileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};
export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    updateProfile: (state, action: PayloadAction<ProfileData>) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<ProfileData>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      }
    );
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<ProfileData>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      }
    );
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
