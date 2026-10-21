import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { routes, NotFound } from './routes';

/** Rute iz src/routes.ts + stran 404 za vse ostalo. */
function AppRoutes() {
  return useRoutes([
    ...routes.map(({ path, Component }) => ({ path, element: <Component /> })),
    { path: '*', element: <NotFound /> },
  ]);
}

/**
 * Jedro aplikacije brez routerja in HelmetProviderja.
 * Isto komponento uporabita brskalnik (BrowserRouter, main.tsx) in
 * prerender ob buildu (StaticRouter, entry-server.tsx).
 */
export function AppShell() {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
        <AppRoutes />
      </Suspense>
    </Layout>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </HelmetProvider>
  );
}
