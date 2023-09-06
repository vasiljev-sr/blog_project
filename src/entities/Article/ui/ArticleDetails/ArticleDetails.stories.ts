import type { Meta, StoryObj } from '@storybook/react';
import image from 'shared/assets/test/cat.png';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
  title: 'shared/ArticleDetails',
  component: ArticleDetails,
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {};
