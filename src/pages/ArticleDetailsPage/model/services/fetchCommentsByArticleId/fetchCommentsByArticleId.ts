import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('comments/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<Comment[]>(`/comments`, {
      params: { articleId, _expand: 'user' },
    });

    if (!response.data) {
      throw new Error();
    }

    if (!articleId) {
      rejectWithValue('error');
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('Comments fetch error');
  }
});
