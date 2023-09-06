import type { Meta, StoryObj } from '@storybook/react';
import image from 'shared/assets/test/cat.png';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'shared/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {};
