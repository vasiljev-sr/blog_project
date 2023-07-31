import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
  test('should return auth data', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {
        username: 'user',
        password: '1234',
        error: '',
        isLoading: false,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'user',
      password: '1234',
      error: '',
      isLoading: false,
    });
  });
  test('auth data is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toBe(undefined);
  });
});
