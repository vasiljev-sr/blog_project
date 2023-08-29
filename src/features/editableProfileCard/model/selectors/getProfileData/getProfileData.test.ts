import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const data = {
      first_name: 'Ravil',
      last_name: 'Vasilev',
      avatar: 'https://loremflickr.com/480/320',
      age: 26,
      username: 'admin',
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Kazan',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('profile data is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
