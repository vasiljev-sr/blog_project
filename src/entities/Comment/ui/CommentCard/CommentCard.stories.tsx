import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'shared/Comments/CommentCard',
  component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    isLoading: false,
    comment: {
      id: '1',
      user: { id: '1', username: 'admin' },
      text: 'Comment',
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    comment: {
      id: '1',
      user: { id: '1', username: 'admin' },
      text: 'Comment',
    },
  },
};
