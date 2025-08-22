import type { ICategory, ILocation, IProduct } from 'interfaces';

export interface IServerCategory extends ICategory {
	parentId?: string;
}

export interface IServerProduct {
	categoryId: string;
	locationId: string;
	id: string;
	name: string;
}

export interface IServerLocation extends ILocation {
	parentId?: string;
}
