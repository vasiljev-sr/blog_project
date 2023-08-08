import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRoutes = 'main' | 'about' | 'notFound' | 'profile';

export const routePaths: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  //last
  notFound: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: {
    path: routePaths.main,
    element: <HomePage />,
  },
  about: {
    path: routePaths.about,
    element: <AboutPage />,
  },
  profile: {
    path: routePaths.profile,
    element: <ProfilePage />,
  },
  notFound: {
    path: routePaths.notFound,
    element: <NotFound />,
  },
};
