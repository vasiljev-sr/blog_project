import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator('dark'),
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};
