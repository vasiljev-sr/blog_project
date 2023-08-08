import { Country, Currency } from 'shared/lib/types/common';

export interface ProfileType {
  first_name: string;
  last_name: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: ProfileType;
  isLoading: boolean;
  error?: string;
}
