import { ICategory } from './ICategory';
import { ILocation } from './ILocation';

export interface IProduct {
	id: string;
	name: string;
	location: ILocation;
	category: ICategory;
}
