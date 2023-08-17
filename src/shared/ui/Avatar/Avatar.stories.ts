import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: 'https://loremflickr.com/480/320',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};

export const Small: Story = {
  args: {
    size: 50,
  },
};

export const Large: Story = {
  args: {
    size: 200,
  },
};
