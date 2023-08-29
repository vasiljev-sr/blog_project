import type { Meta, StoryObj } from '@storybook/react';
import image from 'shared/assets/test/cat.png';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: image,
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
