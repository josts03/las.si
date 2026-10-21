import { lazy } from 'react';
import type { ComponentType, LazyExoticComponent } from 'react';
import { Home } from './pages/Home';

export interface AppRoute {
  path: string;
  Component: ComponentType | LazyExoticComponent<ComponentType>;
  /** Če manjka, stran ni v sitemap.xml. */
  priority?: number;
}

/**
 * Ena resnica za rute: App.tsx iz tega seznama zgradi <Routes>,
 * scripts/prerender.mjs pa vsako stran izrenderira v dist/<pot>.html in sitemap.xml.
 */
export const routes: AppRoute[] = [
  { path: '/', Component: Home, priority: 1.0 },
  {
    path: '/storitve',
    Component: lazy(() => import('./pages/Services').then((m) => ({ default: m.Services }))),
    priority: 0.9,
  },
  {
    path: '/prej-potem',
    Component: lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery }))),
    priority: 0.8,
  },
  {
    path: '/nasa-zgodba',
    Component: lazy(() => import('./pages/Story').then((m) => ({ default: m.Story }))),
    priority: 0.7,
  },
  {
    path: '/kontakt',
    Component: lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact }))),
    priority: 0.7,
  },
];

/** Stran 404 – ruta "*" v App.tsx; prerender jo zapiše v dist/404.html. */
export const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));
