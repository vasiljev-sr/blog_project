import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { NotFound } from 'pages/NotFound';

const meta: Meta<typeof NotFound> = {
  title: 'pages/NotFound',
  component: NotFound,
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark')],
};
