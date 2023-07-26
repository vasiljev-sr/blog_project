import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: { to: '/' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
  args: {
    children: 'Text',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator('dark')],
};

export const SecondaryLight: Story = {
  args: {
    children: 'Text',
    theme: 'secondary',
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: 'secondary',
  },
  decorators: [ThemeDecorator('dark')],
};
