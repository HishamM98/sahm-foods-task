import { setupWorker } from 'msw/browser';
import { fakeSocketServer } from './fake-socket-server';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

export async function startMockBackend(): Promise<void> {
  // Dynamically resolve base href (e.g., '/sahm-foods-task/' on GitHub Pages or '/' locally)
  const baseHref = document.querySelector('base')?.getAttribute('href') || '/';

  // Sanitize trailing slash to avoid '//mockServiceWorker.js'
  const normalizedBase = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;

  await worker.start({
    onUnhandledRequest: 'bypass',
    quiet: true,
    serviceWorker: {
      url: `${normalizedBase}mockServiceWorker.js`,
    },
  });

  fakeSocketServer.start();
}
