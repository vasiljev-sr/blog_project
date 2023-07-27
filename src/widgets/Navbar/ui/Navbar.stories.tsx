import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LightNotAuthUser: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: undefined } })],
};

export const DarkNotAuthUser: Story = {
  args: {},
  decorators: [
    ThemeDecorator('dark'),
    StoreDecorator({ user: { authData: undefined } }),
  ],
};

export const LightAuthUser: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } }),
  ],
};

export const DarkAuthUser: Story = {
  args: {},
  decorators: [
    ThemeDecorator('dark'),
    StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } }),
  ],
};
