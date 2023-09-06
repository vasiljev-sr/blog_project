import type { Meta, StoryObj } from '@storybook/react';
import image from 'shared/assets/test/cat.png';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: 'shared/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Primary: Story = {};
