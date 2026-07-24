import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { environment } from './environments/environment';

async function bootstrap(): Promise<void> {
  if (environment.useMockBackend) {
    const { startMockBackend } = await import('./app/mock-backend/browser');
    await startMockBackend();
  }

  await bootstrapApplication(App, appConfig);
}

bootstrap().catch((err) => console.error(err));
