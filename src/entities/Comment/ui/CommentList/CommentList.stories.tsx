import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'shared/Comments/CommentList',
  component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
  args: {
    isLoading: false,
    comments: [
      {
        id: '1',
        user: { id: '1', username: 'admin' },
        text: 'Comment1',
      },
      {
        id: '2',
        user: { id: '1', username: 'admin' },
        text: 'Comment2',
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
};
