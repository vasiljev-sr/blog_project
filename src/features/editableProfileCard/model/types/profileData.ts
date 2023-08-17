import { Country, Currency } from 'shared/lib/types/common';

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
