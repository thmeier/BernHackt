import { IProduct, ICategory } from 'interfaces';

export const categories: ICategory[] = [
	{
		name: 'Getränke',
	},
	{
		name: 'Bier',
		parent: {
			name: 'Getränke',
		}
	}
];

export const products: IProduct[] = [
	{
		name: 'Noser Bier',
		category: categories[1],
	}
];
