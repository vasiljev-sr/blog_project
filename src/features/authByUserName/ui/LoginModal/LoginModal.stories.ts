import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from './LoginModal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof LoginModal> = {
  title: 'features/LoginModal',
  component: LoginModal,
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
