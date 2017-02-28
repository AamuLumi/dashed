import SimpleSchema from "simpl-schema";

export interface Project {
	name: string;
	_id: string;
}

export const PROJECT_SCHEMA = new SimpleSchema({
	name: {type: String}
});

export class DefaultProject implements Project {
	name: string;
	_id: string;

	constructor() {

	}
}