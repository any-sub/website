import { worker as browserWorker } from './mocks/browser';

browserWorker?.start({ waitUntilReady: true, onUnhandledRequest: 'bypass' });
