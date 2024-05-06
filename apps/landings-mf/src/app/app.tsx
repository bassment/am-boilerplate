import { useCallback, useEffect, useState } from 'react';
import {
  StoreProvider,
  NotificationProvider,
  LayoutWithNavigation,
} from '@am/shared';
import { config, createTheme, ThemeProvider } from '@am/design-system';
import { LandingsPageType } from '@am/types';
import { LandingsRoutes } from '../routes';
import React from 'react';
import {
  LoaderFunctionArgs,
  Outlet,
  RouteObject,
  useLoaderData,
  useLocation,
} from 'react-router-dom';

const theme = createTheme(config.amTheme);

export interface AppProps {
  type?: LandingsPageType;
  testData?: string;
}

export const App = ({ type: initialType, testData }: AppProps) => {
  const [type, setType] = useState<LandingsPageType | undefined>(initialType);
  const location = useLocation();

  const handleLandingsPageTypeChange = useCallback((e: Event) => {
    const type = (e as CustomEvent).detail.type;
    setType(type);
  }, []);

  useEffect(() => {
    setType(location.pathname === '/' ? 'home' : 'details');
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener(
      'LANDINGS_PAGE_TYPE_CHANGE',
      handleLandingsPageTypeChange
    );

    return () => {
      window.removeEventListener(
        'LANDINGS_PAGE_TYPE_CHANGE',
        handleLandingsPageTypeChange
      );
    };
  }, [handleLandingsPageTypeChange]);

  return (
    <StoreProvider>
      <NotificationProvider>
        <ThemeProvider theme={theme}>
          <LayoutWithNavigation>
            <LandingsRoutes type={type} testData={testData} />
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
        index: true,
        element: <App type="home" />,
      },
      {
        path: 'details',
        element: <App type="details" />,
      },
    ],
  },
];

export default App;
