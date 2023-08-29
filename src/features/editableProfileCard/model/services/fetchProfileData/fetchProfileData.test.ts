import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncFunc/TestAsyncFunc';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileData } from '../../types/profileData';

describe('fetchProfileData.test', () => {
  test('success', async () => {
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
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk();

    expect(result.payload).toEqual(profileData);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Profile error');
  });
});
