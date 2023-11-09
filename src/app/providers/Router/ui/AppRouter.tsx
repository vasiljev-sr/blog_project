import React, { memo, ReactElement, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouteProps } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/Router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const { path, element, authOnly } = route;
    const routeElement = authOnly ? (
      <RequireAuth>{element as ReactElement}</RequireAuth>
    ) : (
      element
    );

    return <Route key={path} path={path} element={routeElement} />;
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
