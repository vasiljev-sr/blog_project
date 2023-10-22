import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export type AppRoutes =
  | 'main'
  | 'about'
  | 'notFound'
  | 'profile'
  | 'articles'
  | 'articleDetails';

export const routePaths: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile/',
  articles: '/articles',
  articleDetails: '/articles/',
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
    path: routePaths.profile + ':id',
    element: <ProfilePage />,
    authOnly: true,
  },
  articles: {
    path: routePaths.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  articleDetails: {
    path: routePaths.articleDetails + ':id',
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  notFound: {
    path: routePaths.notFound,
    element: <NotFound />,
  },
};
