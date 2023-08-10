import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  test('has authData', () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: { id: '1', username: 'username' } },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: '1',
      username: 'username',
    });
  });
  test('authData is undefined', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {},
    };
    expect(getUserAuthData(state as StateSchema)).toBe(undefined);
  });
});
