import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof ArticleViewSwitcher> = {
  title: 'features/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSwitcher>;

export const Primary: Story = {
  args: {
    view: 'gallery',
  },
};

export const Dark: Story = {
  args: {
    view: 'list',
  },
  decorators: [ThemeDecorator('dark')],
};
