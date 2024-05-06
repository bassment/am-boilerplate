import React from 'react';
import {
  LoaderFunctionArgs,
  Outlet,
  RouteObject,
  useLoaderData,
} from 'react-router-dom';
import { LandingsPage, AuthorizationPage, AccountPage } from '../routes';

export type MainContextLoaderData = {
  testData: string;
};

const sleep = (n = 500) => new Promise((r) => setTimeout(r, n));
export const mainContextLoader = async ({ request }: LoaderFunctionArgs) => {
  await sleep();
  return { testData: 'Test Data' };
};

export const MainContextRoute = () => {
  const { testData } = useLoaderData() as MainContextLoaderData;

  return (
    <React.Suspense fallback={null}>
      <Outlet context={[testData]} />
    </React.Suspense>
  );
};

export const routes: RouteObject[] = [
  {
    path: '/',
    loader: mainContextLoader,
    element: <MainContextRoute />,
    children: [
      {
        index: true,
        element: <LandingsPage type="home" />,
      },
      {
        path: 'details',
        element: <LandingsPage type="details" />,
      },
      {
        path: 'signin',
        element: <AuthorizationPage type="signin" />,
      },
      {
        path: 'signup',
        element: <AuthorizationPage type="signup" />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
    ],
  },
];
