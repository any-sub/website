import type { SetupWorker } from 'msw';
import { setupWorker } from 'msw';
import { routes } from './routes';
import { browser } from '$app/environment';
import { isMockEnabled } from '$lib';

let worker: SetupWorker | null;
if (browser && isMockEnabled()) {
	worker = setupWorker(...routes);
} else {
	worker = null;
}

export { worker };
