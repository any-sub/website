import type { PageLoad } from './$types';
import { getJobs } from '$lib/api';

export const load: PageLoad = async () => {
	try {
		const { data: jobs } = await getJobs();
		return { jobs };
	} catch (e) {
		return { jobs: [] };
	}
};
