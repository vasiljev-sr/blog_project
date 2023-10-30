import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { actions } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
  args: {
    onSendComment: function () {
      return;
    },
  },
  decorators: [StoreDecorator({})],
};
