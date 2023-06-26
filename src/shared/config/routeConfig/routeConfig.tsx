import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFound';

export type AppRoutes = 'main' | 'about' | 'notFound';

export const RoutePaths: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  notFound: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: {
    path: RoutePaths.main,
    element: <HomePage />,
  },
  about: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  notFound: {
    path: RoutePaths.notFound,
    element: <NotFound />,
  },
};
