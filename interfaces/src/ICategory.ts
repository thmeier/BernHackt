import { ILocation } from './ILocation';

export interface ICategory {
	id: string;
	name: string;
	parent?: ILocation;
}
