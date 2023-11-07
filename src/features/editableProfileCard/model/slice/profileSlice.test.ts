import { profileActions, profileReducer } from './profileSlice';
import {
  ProfileData,
  ProfileSchema,
  ValidateProfileError,
} from '../types/profileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'features/editableProfileCard';

const profileData: ProfileData = {
  first_name: 'Ravil',
  last_name: 'Vasilev',
  avatar:
    'https://koshka.top/uploads/posts/2021-11/1638019767_2-koshka-top-p-rizhe-belii-kot-poroda-2.jpg',
  age: 26,
  username: 'admin',
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Kazan',
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false))
    ).toEqual({ readonly: false });
  });
  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      readonly: false,
      form: { age: 20 },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      data: profileData,
      form: profileData,
      readonly: true,
      validateErrors: undefined,
    });
  });
  test('test profile service pending ', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual<DeepPartial<ProfileSchema>>({
      isLoading: true,
      validateErrors: undefined,
    });
  });
  test('test profile service fulfilled ', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
      readonly: false,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(profileData, '')
      )
    ).toEqual<DeepPartial<ProfileSchema>>({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data: profileData,
      form: profileData,
    });
  });
});
