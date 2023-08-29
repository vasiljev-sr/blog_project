import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from 'features/editableProfileCard/model/types/profileData';

describe('getProfileValidateErrors.test', () => {
  test('should return readonly', () => {
    const errors = [ValidateProfileError.INCORRECT_AVATAR];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('readonly is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
