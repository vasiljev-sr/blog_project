import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    value: 'Input',
  },
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const WithLabel: Story = {
  args: {
    value: 'Input',
    label: 'label',
  },
};

export const WithLabelDark: Story = {
  args: {
    value: 'Input',
    label: 'label',
  },
  decorators: [ThemeDecorator('dark')],
};
