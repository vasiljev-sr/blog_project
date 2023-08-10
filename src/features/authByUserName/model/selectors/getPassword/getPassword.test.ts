import { StateSchema } from 'app/providers/StoreProvider';
import { getPassword } from './getPassword';

describe('getPassword.test', () => {
  test('has password', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: { password: '1234' },
    };
    expect(getPassword(state as StateSchema)).toBe('1234');
  });
  test('password is undefined', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {},
    };
    expect(getPassword(state as StateSchema)).toBe('');
  });
});
