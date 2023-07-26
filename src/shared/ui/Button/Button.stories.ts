import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: 'outlined',
  },
};

export const Background: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
};
export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: 'inverted',
  },
};

export const SizeM: Story = {
  args: {
    children: 'Text',
    theme: 'outlined',
    size: 'size_m',
  },
};

export const SizeL: Story = {
  args: {
    children: 'Text',
    theme: 'outlined',
    size: 'size_l',
  },
};

export const SizeXL: Story = {
  args: {
    children: 'Text',
    theme: 'outlined',
    size: 'size_xl',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator('dark')],
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
  decorators: [ThemeDecorator('dark')],
};

export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    theme: 'outlined',
  },
  decorators: [ThemeDecorator('dark')],
};

export const BackgroundDark: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
  decorators: [ThemeDecorator('dark')],
};
export const InvertedDark: Story = {
  args: {
    children: 'Text',
    theme: 'inverted',
  },
  decorators: [ThemeDecorator('dark')],
};
export const SquareDark: Story = {
  args: {
    children: '<',
    square: true,
    size: 'size_l',
  },
  decorators: [ThemeDecorator('dark')],
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
    theme: 'outlined',
  },
};

export const DisabledDark: Story = {
  args: {
    children: 'Button',
    disabled: true,
    theme: 'outlined',
  },
  decorators: [ThemeDecorator('dark')],
};
