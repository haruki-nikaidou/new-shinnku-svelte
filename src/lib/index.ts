// place files you want to import through the `$lib` alias in this folder.
export interface Game {
	name: string;
	size: number;
	download_method: string;
}

export const fake_games: Game[] = [
	{
		name: 'Game 1',
		size: 100,
		download_method: 'direct'
	},
	{
		name: 'Game 2',
		size: 200,
		download_method: 'torrent'
	},
	{
		name: 'Game 1',
		size: 100,
		download_method: 'direct'
	},
	{
		name: 'Game 2',
		size: 200,
		download_method: 'torrent'
	},
	{
		name: 'Game 1',
		size: 100,
		download_method: 'direct'
	},
	{
		name: 'Game 2',
		size: 200,
		download_method: 'torrent'
	},
	{
		name: 'Game 1',
		size: 100,
		download_method: 'direct'
	},
	{
		name: 'Game 2',
		size: 200,
		download_method: 'torrent'
	},
	{
		name: 'Game 1',
		size: 100,
		download_method: 'direct'
	},
	{
		name: 'Game 2',
		size: 200,
		download_method: 'torrent'
	}
]