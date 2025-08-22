import type { IServerCategory, IServerLocation, IServerProduct } from './extra';

export const categories: IServerCategory[] = [
	{
		id: '42fceff7-deb1-41ab-a4a0-ccd35ad8fd409',
		name: 'Getränke',
	},
	{
		id: 'a8aa090a-b5d4-4359-9aa1-b45e01ecb809',
		name: 'Bier',
		parentId: '42fceff7-deb1-41ab-a4a0-ccd35ad8fd40'
	}
];

export const products: IServerProduct[] = [
	{
		id: 'ebf18433-2fbd-4856-86cf-ac9604062b0a',
		name: 'Noser Bier',
		categoryId: 'a8aa090a-b5d4-4359-9aa1-b45e01ecb809',
		locationId: '9194a6fd-7492-419b-9708-14be317172e0',
	}
];

export const locations: IServerLocation[] = [
	{
		id: '9194a6fd-7492-419b-9708-14be317172e0',
		name: 'Kühlschrank 1'
	}
];
