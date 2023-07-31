import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('has error', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: { error: 'Some error' },
    };
    expect(getLoginError(state as StateSchema)).toBe('Some error');
  });
  test('error is undefined', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {},
    };
    expect(getLoginError(state as StateSchema)).toBe(undefined);
  });
});
