import type { Meta, StoryObj } from '@storybook/react';
import image from 'shared/assets/test/cat.png';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
  title: 'shared/ArticleList',
  component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Primary: Story = {};
