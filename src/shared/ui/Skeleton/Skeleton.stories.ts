import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: 50,
  },
};

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: 50,
  },
  decorators: [ThemeDecorator('dark')],
};

export const Circle: Story = {
  args: {
    width: 50,
    height: 50,
    border: '50%',
  },
};
