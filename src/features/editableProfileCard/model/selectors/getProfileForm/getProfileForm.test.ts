import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm.test', () => {
  test('should return profile from', () => {
    const form = {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('form is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
