import SimpleSchema from "simpl-schema";
import { Project, PROJECT_SCHEMA } from "./project.model";

export interface Note {
	description: string;
	project: Project;
	_id: string;
}

export const NOTE_SCHEMA = new SimpleSchema({
	description: {type: String},
	project: {type: PROJECT_SCHEMA}
});

export class DefaultNote implements Note {
	description: string;
	project: Project;
	_id: string;

	constructor() {
	}
}
