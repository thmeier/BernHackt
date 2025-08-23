export interface ILocation {
	id: string;
	name: string;
	parent?: ILocation;
	x?: number;
	y?: number;
	background?: string;
}
