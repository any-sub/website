import { setupServer } from 'msw/node';
import type { SetupServer } from 'msw/node';
import { routes } from './routes';
import { browser, dev } from '$app/environment';

let worker: SetupServer | null;
if (!browser && dev) {
	worker = setupServer(...routes);
} else {
	worker = null;
}

export { worker };
