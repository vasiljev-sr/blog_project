import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';

export type AppRoutes = 'main' | 'about';

export const RoutePaths: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
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
};
