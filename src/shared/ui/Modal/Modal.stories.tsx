import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa,\n' +
      '        cumque ea error est explicabo facilis harum inventore iste itaque odio\n' +
      '        officiis optio perspiciatis quaerat reiciendis reprehenderit sapiente',
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa,\n' +
      '        cumque ea error est explicabo facilis harum inventore iste itaque odio\n' +
      '        officiis optio perspiciatis quaerat reiciendis reprehenderit sapiente',
    isOpen: true,
  },
  decorators: [ThemeDecorator('dark')],
};
