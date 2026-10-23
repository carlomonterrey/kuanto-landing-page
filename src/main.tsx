import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/tokens.css';
import './styles/app.css';

const container = document.getElementById('root');
if (!container) throw new Error('Falta #root en index.html');


const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// En producción el HTML llega prerenderizado: hidratamos en vez de re-renderizar.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
