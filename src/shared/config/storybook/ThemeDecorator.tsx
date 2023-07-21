import { Theme } from 'shared/config/theme';
import { StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className="app">
        <Story />
      </div>
    </ThemeProvider>
  );
