import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'text text text',
  },
};
export const onlyTitle: Story = {
  args: {
    title: 'Title',
  },
};
export const onlyText: Story = {
  args: {
    text: 'text text text',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'text text text',
  },
  decorators: [ThemeDecorator('dark')],
};

export const WithError: Story = {
  args: {
    title: 'Title',
    text: 'text text text',
    theme: 'error',
  },
};

export const WithErrorDark: Story = {
  args: {
    title: 'Title',
    text: 'text text text',
    theme: 'error',
  },
  decorators: [ThemeDecorator('dark')],
};
