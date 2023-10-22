import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { AUTH_SECRET, GOOGLE_ID, GOOGLE_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';

const authorization: Handle = async ({ event, resolve }) => {
	// Protect any routes under /authenticated
	const session = await event.locals.getSession();
	if (!event.url.pathname.startsWith('/login')) {
		if (!session) {
			throw redirect(303, '/login');
		}
	} else {
		if (session) {
			throw redirect(303, '/');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
};

export const handle = sequence(
	SvelteKitAuth(async () => {
		return {
			providers: [
				Google({
					clientId: GOOGLE_ID,
					clientSecret: GOOGLE_SECRET
				})
			],
			secret: AUTH_SECRET,
			trustHost: true
		};
	}) satisfies Handle,
	authorization
);
