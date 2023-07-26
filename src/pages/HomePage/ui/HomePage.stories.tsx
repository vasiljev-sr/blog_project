import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { HomePage } from 'pages/HomePage';

const meta: Meta<typeof HomePage> = {
  title: 'pages/HomePage',
  component: HomePage,
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark')],
};
