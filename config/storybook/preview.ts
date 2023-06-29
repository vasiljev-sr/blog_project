import type { Preview } from '@storybook/react';
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator";


const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator('light')],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

};


export default preview;

