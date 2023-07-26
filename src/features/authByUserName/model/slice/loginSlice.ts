import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  isOpenModal: false,
};
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    openModal: (state) => {
      state.isOpenModal = true;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
      state.error = '';
      state.username = '';
      state.password = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = false;
      state.isOpenModal = false;
    });
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
