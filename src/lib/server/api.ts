import { API_BASE_URL, CLOUDFLARE_ACCESS_ID, CLOUDFLARE_ACCESS_SECRET } from '$env/static/private';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { Job } from '../../service/types';
import { isMockEnabled } from '$lib';
import fetchAdapter from '@haverstack/axios-fetch-adapter';

const service = axios.create({
	baseURL: isMockEnabled() ? '/' : API_BASE_URL,
	adapter: fetchAdapter,
	transformRequest: [
		(data, headers) => {
			headers.set('CF-Access-Client-Id', CLOUDFLARE_ACCESS_ID);
			headers.set('CF-Access-Client-Secret', CLOUDFLARE_ACCESS_SECRET);
			return data;
		}
	]
});

export const getJobs = (config?: AxiosRequestConfig) => service.get<Job[]>('/job', config);
