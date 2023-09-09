import { rest, RestHandler } from 'msw';
import type { Job } from '../service/types';

// Define your mock handlers in here
export const routes: Array<RestHandler> = [
	rest.get('/job', (_, res, ctx) => {
		return res(ctx.status(200), ctx.json([{ id: 'foo' }] as Job[]));
	})
];
