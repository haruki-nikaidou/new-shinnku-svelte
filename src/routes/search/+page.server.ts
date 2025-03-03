import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { fake_games, type Game } from '$lib';
import Fuse from 'fuse.js';

const GAME_PER_PAGE = 10;

interface SearchResponse {
	total_pages: number;
	games: Game[];
	current_page: number;
}

export const load: PageServerLoad = async ({ url }) => {
	if (url.searchParams.get('search') == null || url.searchParams.get('search') === '') {
		redirect(303, '/');
	}
	const page = parseInt(url.searchParams.get('page') || '0', 10);
	
	const all_games = fake_games();
	const fuse = new Fuse(all_games, {
		includeScore: true,
		keys: ['name']
	});
	const search_result = fuse.search(url.searchParams.get('search') as string).map(result => result.item);
	
	const total_pages = Math.ceil(search_result.length / GAME_PER_PAGE);
	const games = search_result.slice(page * GAME_PER_PAGE, (page + 1) * GAME_PER_PAGE);
	return {
		total_pages, games, current_page: page + 1
	} satisfies SearchResponse;
};