import type { SetupServer } from 'msw/node';
import { setupServer } from 'msw/node';
import { routes } from './routes';
import { browser } from '$app/environment';
import { isMockEnabled } from '$lib';

let worker: SetupServer | null;
if (!browser && isMockEnabled()) {
	worker = setupServer(...routes);
} else {
	worker = null;
}

export { worker };
