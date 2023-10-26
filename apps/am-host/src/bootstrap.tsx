import * as ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  matchRoutes,
} from 'react-router-dom';

import { routes } from './app/app';

import './utils/i18n';

hydrate();

async function hydrate() {
  // Determine if any of the initial routes are lazy
  const lazyMatches = matchRoutes(routes, window.location)?.filter(
    (m) => m.route.lazy
  );

  // Load the lazy matches and update the routes before creating your router
  // so we can hydrate the SSR-rendered content synchronously
  if (lazyMatches && lazyMatches?.length > 0) {
    await Promise.all(
      lazyMatches.map(async (m) => {
        const routeModule = await m.route.lazy?.();
        Object.assign(m.route, { ...routeModule, lazy: undefined });
      })
    );
  }

  const rootElement = document.getElementById('root');

  if (rootElement) {
    const router = createBrowserRouter(routes);

    ReactDOM.hydrateRoot(
      rootElement,
      <RouterProvider router={router} fallbackElement={null} />
    );
  }
}
