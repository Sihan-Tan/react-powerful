import PageNotFoundView from '@components/Lib/PageNotFoundView';
import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import MainLayout from '@components/Main/MainLayout';
import Loading from '@components/Lib/Loading';
import MainView from '@pages/main/index'
const Layout = () => (
  <Suspense fallback={<Loading />}>
    <MainLayout />
  </Suspense>
);

const Routes: RouteObject[] = [];
const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    { path: '*', element: <Navigate to="/404" /> },
    { path: '/', element: <MainView /> },
    { path: '404', element: <PageNotFoundView /> },
  ],
};

Routes.push(mainRoutes);
export default Routes;
