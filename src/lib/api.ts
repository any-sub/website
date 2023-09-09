import { PUBLIC_API_URL } from '$env/static/public';
import { dev } from '$app/environment';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { Job } from '../service/types';

const service = axios.create({
	baseURL: dev ? '/' : PUBLIC_API_URL
});

export const getJobs = (config?: AxiosRequestConfig) => service.get<Job[]>('/job', config);
