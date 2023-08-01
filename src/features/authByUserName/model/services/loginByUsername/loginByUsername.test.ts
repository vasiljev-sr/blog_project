import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { testAsyncFunc } from 'shared/lib/test/TestAsyncFunc/TestAsyncFunc';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
// describe('loginByUsername.test', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;
//
//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });
//   test('success login', async () => {
//     const userData = { username: 'user', id: '1' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
//     const action = loginByUsername({ username: 'user', password: '123' });
//     const result = await action(dispatch, getState, undefined);
//
//     expect(result.payload).toEqual(userData);
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('fulfilled');
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
//   });
//   test('error login', async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//     const action = loginByUsername({ username: 'user', password: '1234' });
//     const result = await action(dispatch, getState, undefined);
//
//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('rejected');
//     expect(result.payload).toBe('Login error');
//   });
// });

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
