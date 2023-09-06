import type { Meta, StoryObj } from '@storybook/react';
import image from 'shared/assets/test/cat.png';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: 'shared/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Primary: Story = {};
