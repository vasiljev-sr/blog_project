import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";


const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text'
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: "clear"
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: "outlined"
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text'
  },
  decorators: [ThemeDecorator('dark')]
};


export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: "clear"
  },
  decorators: [ThemeDecorator('dark')]
};

export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    theme: "outlined"
  },
  decorators: [ThemeDecorator('dark')]
};



