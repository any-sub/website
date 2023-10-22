import type { Job, State } from '../service/types';

export const mockJobs: Job[] = [
	{
		id: 'mock-id-1',
		name: 'Manga'
	}
];

export const mockState: Record<string, State[]> = {
	'mock-id-1': [
		{
			title: "Don't Toy With Me, Miss Nagatoro",
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a nulla ac risus bibendum interdum nec at velit. Nulla facilisi.',
			image: 'https://static.bunnycdn.ru/i/cache/images/4/42/42b89e2e0316faec527fd25e44da4b45.jpg',
			url: 'https://mangafire.to/manga/ijiranaide-nagatoro-san.xr12z',
			read: false
		},
		{
			title: 'My Dress-Up Darling',
			description:
				'Mauris sed ex vel ligula pharetra fermentum ultricies vel purus. Praesent maximus felis sed malesuada pharetra.',
			url: 'https://mangafire.to/manga/sono-bisque-doll-wa-koi-wo-suru.pmm4',
			read: false
		},
		{
			title: 'My Dress-Up Darling',
			description:
				'Mauris sed ex vel ligula pharetra fermentum ultricies vel purus. Praesent maximus felis sed malesuada pharetra.',
			image: 'https://static.bunnycdn.ru/i/cache/images/a/a3/a347475642d3d07dfad06c46aa0ac85b.jpg',
			read: true
		},
		{
			title: 'My Dress-Up Darling',
			description:
				'Mauris sed ex vel ligula pharetra fermentum ultricies vel purus. Praesent maximus felis sed malesuada pharetra.',
			read: true
		},
		{
			title:
				'The Tsuntsuntsuntsuntsuntsuntsuntsuntsuntsuntsundere Girl Getting Less and Less Tsun Day by Day',
			read: true
		},
		{
			title: "Don't Toy With Me, Miss Nagatoro",
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a nulla ac risus bibendum interdum nec at velit. Nulla facilisi.',
			image: 'https://static.bunnycdn.ru/i/cache/images/4/42/42b89e2e0316faec527fd25e44da4b45.jpg',
			url: 'https://mangafire.to/manga/ijiranaide-nagatoro-san.xr12z',
			read: false
		},
		{
			title: 'My Dress-Up Darling',
			description:
				'Mauris sed ex vel ligula pharetra fermentum ultricies vel purus. Praesent maximus felis sed malesuada pharetra.',
			url: 'https://mangafire.to/manga/sono-bisque-doll-wa-koi-wo-suru.pmm4',
			read: false
		},
		{
			title: 'My Dress-Up Darling',
			description:
				'Mauris sed ex vel ligula pharetra fermentum ultricies vel purus. Praesent maximus felis sed malesuada pharetra.',
			image: 'https://static.bunnycdn.ru/i/cache/images/a/a3/a347475642d3d07dfad06c46aa0ac85b.jpg',
			read: true
		},
		{
			title: 'My Dress-Up Darling',
			description:
				'Mauris sed ex vel ligula pharetra fermentum ultricies vel purus. Praesent maximus felis sed malesuada pharetra.',
			read: true
		},
		{
			title:
				'The Tsuntsuntsuntsuntsuntsuntsuntsuntsuntsuntsundere Girl Getting Less and Less Tsun Day by Day',
			read: true
		}
	]
};
