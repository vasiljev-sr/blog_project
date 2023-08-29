import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      first_name: 'Ravil',
      last_name: 'Vasilev',
      avatar: 'https://loremflickr.com/480/320',
      age: 26,
      username: 'admin',
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Kazan',
    },
  },
};

export const Error: Story = {
  args: { error: 'Error' },
};

export const Loading: Story = {
  args: { isLoading: true },
};
