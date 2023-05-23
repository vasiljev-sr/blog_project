import './styles/index.scss';
import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
