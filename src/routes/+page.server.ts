import type { PageServerLoad } from './$types';
import { getJobs } from '$lib/server/api';

export const load: PageServerLoad = async () => {
	try {
		const { data: jobs } = await getJobs();
		return { jobs };
	} catch (e) {
		return { jobs: [] };
	}
};
