import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ArticlesFilterSchema,
  ArticleSortField,
} from '../types/articlesFilterSchema';
import { SortOrder } from 'shared/lib/types/common';

const initialState: ArticlesFilterSchema = {
  order: 'asc',
  search: '',
  sort: 'createdAt',
};
export const articlesFilterSlice = createSlice({
  name: 'articlesFilterSlice',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
  },
});

export const { actions: commentFormActions } = articlesFilterSlice;
export const { reducer: commentFormReducer } = articlesFilterSlice;
