import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: { username: 'admin' } } })],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator('dark'),
    StoreDecorator({ user: { authData: { username: 'admin' } } }),
  ],
};

export const NoAuth: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
