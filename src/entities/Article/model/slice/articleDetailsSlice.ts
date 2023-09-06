import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticlesSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/article';

const initialState: ArticlesSchema = {
  isLoading: false,
};
export const articleDetailsSlice = createSlice({
  name: 'articleDetailsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlesActions } = articleDetailsSlice;
export const { reducer: articlesReducer } = articleDetailsSlice;
