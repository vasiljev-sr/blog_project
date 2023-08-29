import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncFunc/TestAsyncFunc';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileData } from 'features/editableProfileCard';
import { ValidateProfileError } from 'features/editableProfileCard/model/types/profileData';

const profileData: ProfileData = {
  first_name: 'Ravil',
  last_name: 'Vasilev',
  avatar: 'https://loremflickr.com/480/320',
  age: 26,
  username: 'admin',
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Kazan',
};

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileData },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk();

    expect(result.payload).toEqual(profileData);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
  test('no data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {});
    // thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
  });
  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileData },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    expect(thunk.api.put).toHaveBeenCalled();
  });
  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...profileData,
          age: undefined,
          first_name: '',
          last_name: '',
          avatar: '',
        },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_AVATAR,
    ]);
  });
});
