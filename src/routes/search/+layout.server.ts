import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({url}) => {
	if (url.searchParams.get('search') == null || url.searchParams.get('search') === '') {
		redirect(303, '/');
	}
	return {
		search: url.searchParams.get('search') as string
	}
}