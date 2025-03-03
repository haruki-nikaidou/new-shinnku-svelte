export interface Game {
	name: string;
	size: number;
	uuid: string;
	download_seed: string;
	download_provider: string;
	created_at: Date;
	updated_at: Date;
}

import { faker } from '@faker-js/faker';

export const fake_games: () => Game[] = () => {
	const limit = 100;
	const games = [];
	for (let i = 0; i < limit; i++) {
		games.push({
			name: faker.lorem.word(),
			size: faker.number.int({ min: 1000, max: 1000000 }),
			download_seed: faker.string.uuid(),
			download_provider: faker.lorem.word(),
			created_at: faker.date.recent(),
			updated_at: faker.date.recent(),
			uuid: faker.string.uuid(),
		});
	}
	return games;
}