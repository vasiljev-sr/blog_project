import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from './LoginModal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
  title: 'features/LoginModal',
  component: LoginModal,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
  args: {
    isOpen: true,
  },
  decorators: [StoreDecorator({ authForm: { username: '', password: '' } })],
};

export const PrimaryDark: Story = {
  args: { isOpen: true },
  decorators: [
    ThemeDecorator('dark'),
    StoreDecorator({ authForm: { username: '', password: '' } }),
  ],
};

export const Error: Story = {
  args: {
    isOpen: true,
  },
  decorators: [
    StoreDecorator({
      authForm: { username: '', password: '', error: 'Some error' },
    }),
  ],
};
export const Loading: Story = {
  args: {
    isOpen: true,
  },
  decorators: [
    StoreDecorator({
      authForm: { username: '', password: '', isLoading: true },
    }),
  ],
};
