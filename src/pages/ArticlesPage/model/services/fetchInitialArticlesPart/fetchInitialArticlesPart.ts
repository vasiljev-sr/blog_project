import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/getArticlesPageData';

export const fetchInitialArticlesPart = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articles/fetchInitialArticlesPart', async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
