import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../../config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface ComponentRenderProps {
  route?: string;
}

export const componentRender = (
  component: ReactNode,
  options: ComponentRenderProps = {}
) => {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};
