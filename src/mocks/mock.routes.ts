import type { Job, State } from '../service/types';
import type MockAdapter from 'axios-mock-adapter';
import { mockJobs, mockState } from './mock.data';

// Define your mock handlers in here
export const mockRoutes = (ma: MockAdapter) => {
	ma.onGet('/jobs').reply<Job[]>(200, mockJobs);

	const jobUrlMatcher = new RegExp('^/jobs/(?<jobId>[^/]+)$');
	ma.onGet(jobUrlMatcher).reply<Job[]>((config) => {
		const jobId = config.url?.match(jobUrlMatcher)?.groups?.['jobId'];
		const job = mockJobs.find((j) => j.id === jobId);
		return job ? [200, job] : [404];
	});

	const jobStateUrlMatcher = new RegExp('^/jobs/(?<jobId>[^/]+)/state$');
	ma.onGet(jobStateUrlMatcher).reply<Job[]>((config) => {
		const jobId = config.url?.match(jobStateUrlMatcher)?.groups?.['jobId'];
		const state = jobId ? mockState[jobId] : undefined;
		return state ? [200, state] : [404];
	});

	ma.onGet('/states').reply<State[]>(200, Object.values(mockState).flat());
};
