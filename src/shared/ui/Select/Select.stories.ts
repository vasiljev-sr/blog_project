import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: { label: 'Селект' },
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark')],
};
