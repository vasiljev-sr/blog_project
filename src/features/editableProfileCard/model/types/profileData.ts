import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface ProfileData {
  first_name?: string;
  last_name?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: ProfileData;
  form?: ProfileData;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
