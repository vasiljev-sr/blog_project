import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error',
      },
    };
    expect(getProfileError(state as StateSchema)).toBe('Error');
  });

  test('error is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});
