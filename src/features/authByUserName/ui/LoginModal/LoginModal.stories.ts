import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from './LoginModal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
  title: 'features/LoginModal',
  component: LoginModal,
  decorators: [StoreDecorator({ auth: { username: '', password: '' } })],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
  args: {
    isOpen: true,
  },
};

export const PrimaryDark: Story = {
  args: { isOpen: true },
  decorators: [ThemeDecorator('dark')],
};
