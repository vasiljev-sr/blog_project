import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { StoryFn } from '@storybook/react';

export const TranslationDecorator = (Story: StoryFn) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="">
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};
