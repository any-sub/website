import { getAllUpdates } from '$lib/server/api';
import type { ApiError } from '$lib/server/errors';

export const load = async () => {
	try {
		const { data: updates } = await getAllUpdates();
		return { updates };
	} catch (e) {
		return { error: (e as ApiError).message };
	}
};
