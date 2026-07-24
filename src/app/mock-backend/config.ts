import { environment } from '../../environments/environment';

export const mockBackendConfig = {
  get latencyMs() {
    return environment.mock.latencyMs;
  },
  get failureRate() {
    return environment.mock.failureRate;
  },
  get socketTickMs() {
    return environment.mock.socketTickMs;
  },
  apiPrefix: '/api',
} as const;
