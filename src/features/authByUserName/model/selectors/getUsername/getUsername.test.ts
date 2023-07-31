import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername.test', () => {
  test('has username', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: { username: 'username' },
    };
    expect(getUsername(state as StateSchema)).toBe('username');
  });
  test('username is undefined', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {},
    };
    expect(getUsername(state as StateSchema)).toBe('');
  });
});
