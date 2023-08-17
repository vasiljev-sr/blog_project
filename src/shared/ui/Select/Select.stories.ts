import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: {
    label: 'Селект',
    options: [
      { value: 'value1', option: 'value1' },
      { value: 'value2', option: 'value2' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
};
