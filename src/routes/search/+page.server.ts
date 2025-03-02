import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { fake_games, type Game } from '$lib';

const GAME_PER_PAGE = 10;

interface SearchResponse {
	total_pages: number;
	games: Game[];
}

export const load: PageServerLoad = async ({ url }) => {
	if (url.searchParams.get('search') == null || url.searchParams.get('search') === '') {
		redirect(303, '/');
	}
	const page = parseInt(url.searchParams.get('page') || '0', 10);
	const search_result = fake_games;
	const total_pages = Math.ceil(search_result.length / GAME_PER_PAGE);
	const games = search_result.slice(page * GAME_PER_PAGE, (page + 1) * GAME_PER_PAGE);
	return {
		total_pages, games
	} satisfies SearchResponse;
};