import { ThemeProvider, createTheme, config } from '@am/design-system';
import {
  StoreProvider,
  NotificationProvider,
  LayoutWithNavigation,
} from '@am/shared';
import AccountRoutes from '../routes/AccountRoutes';
import React from 'react';
import {
  LoaderFunctionArgs,
  Outlet,
  RouteObject,
  useLoaderData,
} from 'react-router-dom';

const theme = createTheme(config.amTheme);

export const App = () => {
  return (
    <StoreProvider>
      <NotificationProvider>
        <ThemeProvider theme={theme}>
          <LayoutWithNavigation>
            <AccountRoutes />
          </LayoutWithNavigation>
        </ThemeProvider>
      </NotificationProvider>
    </StoreProvider>
  );
};

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
        path: 'account',
        element: <App />,
      },
    ],
  },
];

export default App;
