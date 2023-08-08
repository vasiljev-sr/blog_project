import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileType';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};
export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
