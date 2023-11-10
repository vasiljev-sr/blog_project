import { TestAsyncThunk } from 'shared/lib/test/TestAsyncFunc/TestAsyncFunc';
import { fetchInitialArticlesPart } from './fetchInitialArticlesPart';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchInitialArticlesPart.test', () => {
  test('Fetch initial articles', () => {
    const thunk = new TestAsyncThunk(fetchInitialArticlesPart, {
      articlesPage: { _inited: false },
    });
    thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(fetchArticlesList).toBeCalledWith({ page: 1 });
  });
});
