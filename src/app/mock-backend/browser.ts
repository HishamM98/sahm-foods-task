import { setupWorker } from 'msw/browser';
import { fakeSocketServer } from './fake-socket-server';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

export async function startMockBackend(): Promise<void> {
  await worker.start({
    onUnhandledRequest: 'bypass',
    quiet: true,
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  });
  fakeSocketServer.start();
}
