import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
  test('test set login', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('user'))
    ).toEqual({ username: 'user' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('user'))
    ).toEqual({ password: 'user' });
  });
});
