import type { Meta, StoryObj } from '@storybook/react';
import image from 'shared/assets/test/cat.png';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'shared/Page',
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {};
