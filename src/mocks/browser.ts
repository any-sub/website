import type { SetupWorker } from 'msw';
import { setupWorker } from 'msw';
import { routes } from './routes';
import { browser, dev } from '$app/environment';

let worker: SetupWorker | null;
if (browser && dev) {
	worker = setupWorker(...routes);
} else {
	worker = null;
}

export { worker };
