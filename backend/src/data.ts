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
	},
	{
		id: 'cd3264cf-2404-4df8-b242-6382baf32503',
		name: 'Energy',
		parentId: '42fceff7-deb1-41ab-a4a0-ccd35ad8fd40'
	},
];

export const products: IServerProduct[] = [
	{
		id: 'ebf18433-2fbd-4856-86cf-ac9604062b0a',
		name: 'Noser Bier',
		categoryId: 'a8aa090a-b5d4-4359-9aa1-b45e01ecb809',
		locationId: '9194a6fd-7492-419b-9708-14be317172e0',
	},
	{
		id: 'fbf18433-2fbd-4856-86cf-ac9604062b0a',
		name: 'Anderes Bier',
		categoryId: 'a8aa090a-b5d4-4359-9aa1-b45e01ecb809',
		locationId: '9194a6fd-7492-419b-9708-14be317172e0',
	},
	{
		id: '01d0e97a-12a4-4835-b9f8-6790e0b99e1b',
		name: 'Redbull',
		categoryId: 'cd3264cf-2404-4df8-b242-6382baf32503',
		locationId: '9194a6fd-7492-419b-9708-14be317172e0',
	},
	{
		id: 'a17420d-d8d6-444d-86f1-7c478091bb94b',
		name: 'NOCCO - Limon del sol',
		categoryId: 'cd3264cf-2404-4df8-b242-6382baf32503',
		locationId: '9194a6fd-7492-419b-9708-14be317172e0',
	},
	{
		id: '89ba1451-3699-4c4f-b150-51b0d8d9c2d2',
		name: 'NOCCO - Pfirsich',
		categoryId: 'cd3264cf-2404-4df8-b242-6382baf32503',
		locationId: '8f3856eb-dfe7-4f4f-9b55-c6176bf0c350',
	},
];

export const locations: IServerLocation[] = [
	{
		id: '9194a6fd-7492-419b-9708-14be317172e0',
		name: 'Kühlschrank 1',
	},
	{
		id: '8f3856eb-dfe7-4f4f-9b55-c6176bf0c350',
		name: 'Kühlschrank 2',
	}
];
