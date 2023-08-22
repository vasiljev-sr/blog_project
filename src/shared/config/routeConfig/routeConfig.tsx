import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export type AppRoutes = 'main' | 'about' | 'notFound' | 'profile';

export const routePaths: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  //last
  notFound: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
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
    authOnly: true,
  },
  notFound: {
    path: routePaths.notFound,
    element: <NotFound />,
  },
};
