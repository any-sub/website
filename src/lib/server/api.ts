import { API_BASE_URL, CLOUDFLARE_ACCESS_ID, CLOUDFLARE_ACCESS_SECRET } from '$env/static/private';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { Job, State } from '../../service/types';
import { isMockEnabled } from '$lib';
import fetchAdapter from '@haverstack/axios-fetch-adapter';
import { ApiNetworkError, ApiNotFoundError } from '$lib/server/errors';
import MockAdapter from 'axios-mock-adapter';
import { mockRoutes } from '../../mocks/mock.routes';

const service = axios.create({
	baseURL: API_BASE_URL,
	adapter: fetchAdapter,
	transformRequest: [
		(data, headers) => {
			headers.set('CF-Access-Client-Id', CLOUDFLARE_ACCESS_ID);
			headers.set('CF-Access-Client-Secret', CLOUDFLARE_ACCESS_SECRET);
			return data;
		}
	]
});

if (isMockEnabled()) {
	const mockAdapter = new MockAdapter(service);
	mockRoutes(mockAdapter);
}

service.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		console.log(error.stack);

		let reject;
		switch (error.status) {
			case 404:
				reject = new ApiNotFoundError(error.message, { cause: error });
				break;
			default:
				reject = new ApiNetworkError(error.message, { cause: error });
				break;
		}

		return Promise.reject(reject);
	}
);

export const getJobs = (config?: AxiosRequestConfig) => service.get<Job[]>('/jobs', config);
export const getJob = (jobId: string, config?: AxiosRequestConfig) =>
	service.get<Job[]>(`/jobs/${encodeURIComponent(jobId)}`, config);
export const getUpdates = (jobId: string, config?: AxiosRequestConfig) =>
	service.get<State[]>(`/jobs/${encodeURIComponent(jobId)}/state`, config);

export const getAllUpdates = (config?: AxiosRequestConfig) =>
	service.get<State[]>(`/states`, config);
