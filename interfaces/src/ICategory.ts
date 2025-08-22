import { ILocation } from './ILocation';

export interface ICategory {
	name: string;
	parent?: ILocation;
}
