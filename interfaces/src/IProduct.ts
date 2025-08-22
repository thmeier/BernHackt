import { ICategory } from './ICategory';
import { ILocation } from './ILocation';

export interface IProduct {
	name: string;
	location: ILocation;
	category: ICategory;
}
