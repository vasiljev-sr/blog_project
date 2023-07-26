import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark')],
};
