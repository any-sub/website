import { getJob, getUpdates } from '$lib/server/api';
import type { ApiError } from '$lib/server/errors';

export const load = async ({ params }: { params: { jobId: string } }) => {
	try {
		const [{ data: job }, { data: updates }] = await Promise.all([
			getJob(params.jobId),
			getUpdates(params.jobId)
		]);
		return { job, updates };
	} catch (e) {
		return { error: (e as ApiError).message };
	}
};
