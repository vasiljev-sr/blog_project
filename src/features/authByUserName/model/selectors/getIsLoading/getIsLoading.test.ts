import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getIsLoading } from './getIsLoading';

describe('getIsLoading', () => {
  test('hasLoading', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: { isLoading: true },
    };
    expect(getIsLoading(state as StateSchema)).toBe(true);
  });
  test('isLoading undefined', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {},
    };
    expect(getIsLoading(state as StateSchema)).toBe(false);
  });
});
