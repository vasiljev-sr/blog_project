import React, { Suspense } from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Change theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
