import { ProfileData } from 'features/editableProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';
import { ValidateProfileError } from '../../types/profileData';

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
describe('validateProfileData.test', () => {
  test('success', () => {
    expect(validateProfileData(profileData)).toEqual([]);
  });

  test('without first and last names', () => {
    expect(
      validateProfileData({ ...profileData, first_name: '', last_name: '' })
    ).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test('without avatar', () => {
    expect(validateProfileData({ ...profileData, avatar: '' })).toEqual([
      ValidateProfileError.INCORRECT_AVATAR,
    ]);
  });
  test('without age', () => {
    expect(validateProfileData({ ...profileData, age: undefined })).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('no data', () => {
    expect(validateProfileData(undefined)).toEqual([
      ValidateProfileError.NO_DATA,
    ]);
  });
});
