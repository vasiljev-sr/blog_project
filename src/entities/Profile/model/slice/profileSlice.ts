import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileData, ProfileSchema } from '../types/profileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};
export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {},
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
      }
    );
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
