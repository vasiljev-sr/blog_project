import { TestAsyncThunk } from 'shared/lib/test/TestAsyncFunc/TestAsyncFunc';
import { fetchNextArticlesPart } from './fetchNextArticlesPart';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');
describe('fetchNextArticlesPart.test', () => {
  test('Success fetching', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPart, {
      articlesPage: {
        page: 2,
        limit: 3,
        hasMore: true,
        view: 'gallery',
        isLoading: false,
        ids: [],
        entities: {},
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 3 });
  });
  test('HasMore is false', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPart, {
      articlesPage: {
        page: 2,
        limit: 3,
        hasMore: false,
        view: 'gallery',
        isLoading: false,
        ids: [],
        entities: {},
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  test('Loading is true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPart, {
      articlesPage: {
        page: 2,
        limit: 3,
        hasMore: true,
        view: 'gallery',
        isLoading: true,
        ids: [],
        entities: {},
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
