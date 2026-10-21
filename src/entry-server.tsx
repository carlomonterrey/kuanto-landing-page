import { renderToString } from 'react-dom/server';
import App from './App';

/** Render estático para prerenderizar el HTML antes de publicar. */
export function render(): string {
  return renderToString(<App />);
}
