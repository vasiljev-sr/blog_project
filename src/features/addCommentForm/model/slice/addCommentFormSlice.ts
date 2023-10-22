import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../types/commentFormSchema';
import { sendComment } from 'features/addCommentForm/model/services/sendComment/sendComment';

const initialState: CommentFormSchema = {
  text: '',
};
export const addCommentFormSlice = createSlice({
  name: 'commentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendComment.pending, (state) => {
      state.error = '';
    });
    builder.addCase(sendComment.fulfilled, (state) => {
      state.error = '';
    });
    builder.addCase(sendComment.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { actions: commentFormActions } = addCommentFormSlice;
export const { reducer: commentFormReducer } = addCommentFormSlice;
