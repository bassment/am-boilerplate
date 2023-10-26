import { useCallback, useEffect, useState } from 'react';
import { NotificationProvider, StoreProvider } from '@am/shared';
import { AuthPageType } from '@am/types';
import { config, createTheme, ThemeProvider } from '@am/design-system';
import { AuthRoutes } from '../routes';
import {
  LoaderFunctionArgs,
  Outlet,
  RouteObject,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';
import React from 'react';

const theme = createTheme(config.amTheme);

export interface AppProps {
  type?: AuthPageType;
  testData?: string;
}

export const App = ({
  type: initialType,
  testData: initialTestData,
}: AppProps) => {
  const [type, setType] = useState<AuthPageType | undefined>(initialType);
  const [testData] = useOutletContext() as [string];

  console.log('Authorization MF App', initialTestData, testData);

  const handleAuthPageTypeChange = useCallback((e: Event) => {
    const type = (e as CustomEvent).detail.type;
    setType(type);
  }, []);

  useEffect(() => {
    window.addEventListener('AUTH_PAGE_TYPE_CHANGE', handleAuthPageTypeChange);

    return () => {
      window.removeEventListener(
        'AUTH_PAGE_TYPE_CHANGE',
        handleAuthPageTypeChange
      );
    };
  }, [handleAuthPageTypeChange]);

  return (
    <StoreProvider>
      <NotificationProvider>
        <ThemeProvider theme={theme}>
          <AuthRoutes type={type} />
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
        path: 'signin',
        element: <App type="signin" />,
      },
      {
        path: 'signup',
        element: <App type="signup" />,
      },
    ],
  },
];

export default App;
