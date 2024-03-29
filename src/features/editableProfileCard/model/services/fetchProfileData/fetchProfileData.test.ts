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
      avatar:
        'https://koshka.top/uploads/posts/2021-11/1638019767_2-koshka-top-p-rizhe-belii-kot-poroda-2.jpg',
      age: 26,
      username: 'admin',
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Kazan',
    };
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk('1');

    expect(result.payload).toEqual(profileData);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Profile error');
  });
});
