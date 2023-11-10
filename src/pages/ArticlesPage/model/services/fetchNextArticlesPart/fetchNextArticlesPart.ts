import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageHasMore,
  getArticlesPageLoading,
  getArticlesPageNum,
} from '../../selectors/getArticlesPageData';

export const fetchNextArticlesPart = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articles/fetchNextArticlesPart', async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const hasMore = getArticlesPageHasMore(getState());
  const isLoading = getArticlesPageLoading(getState());
  const page = getArticlesPageNum(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticlesList({ page: page + 1 }));
  }
});
