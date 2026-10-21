import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/inter-tight/wght.css';
import '@fontsource-variable/fraunces/wght-italic.css';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Produkcijski HTML je prerenderan (scripts/prerender.mjs), zato ga hidriramo.
// V razvoju (vite dev) je #root prazen in aplikacijo izrišemo na klientu.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
