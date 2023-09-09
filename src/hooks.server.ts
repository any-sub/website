import { worker as serverWorker } from './mocks/server';

serverWorker?.listen({ onUnhandledRequest: 'bypass' });
