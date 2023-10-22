import { getJobs } from '$lib/server/api';
import type { ApiError } from '$lib/server/errors';

export const load = async () => {
	try {
		const { data: jobs } = await getJobs();
		return { jobs };
	} catch (e) {
		return { jobs: [{ id: (e as ApiError).message }] };
	}
};
