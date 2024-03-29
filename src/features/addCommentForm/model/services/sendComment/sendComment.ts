import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetails } from 'entities/Article';
import { commentFormActions } from '../../slice/addCommentFormSlice';

export const sendComment = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('comment/addComment', async (comment, thunkAPI) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

  const userData = getUserAuthData(getState());
  const article = getArticleDetails(getState());

  if (!userData || !article) {
    rejectWithValue('no data');
  }

  try {
    const response = await extra.api.post('/comments', {
      text: comment,
      articleId: article?.id,
      userId: userData?.id,
    });

    if (!response.data) {
      throw new Error();
    }
    dispatch(commentFormActions.setText(''));
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('Login error');
  }
});
