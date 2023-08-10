import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { testAsyncFunc } from 'shared/lib/test/TestAsyncFunc/TestAsyncFunc';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userData = { username: 'user', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const { callThunk, dispatch } = testAsyncFunc(loginByUsername);
    const result = await callThunk({ username: 'user', password: '123' });

    expect(result.payload).toEqual(userData);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
  });
  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const { callThunk, dispatch } = testAsyncFunc(loginByUsername);
    const result = await callThunk({ username: 'user', password: '123' });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Login error');
  });
});
