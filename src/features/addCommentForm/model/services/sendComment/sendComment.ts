import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getCommentFormText } from '../../selectors/commentFormSelectors';
import { getArticleDetails } from 'entities/Article';
import { commentFormActions } from 'features/addCommentForm/model/slice/addCommentFormSlice';

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
  'comment/addComment',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    const userData = getUserAuthData(getState());
    const text = getCommentFormText(getState());
    const article = getArticleDetails(getState());

    if (!userData || !text || !article) {
      rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post('/comments', {
        text: text,
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
  }
);
