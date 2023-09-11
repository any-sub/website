// place files you want to import through the `$lib` alias in this folder.
import { dev } from '$app/environment';
import { PUBLIC_DISABLE_MOCKS } from '$env/static/public';

export const isMockEnabled = () => dev && PUBLIC_DISABLE_MOCKS !== 'true';
