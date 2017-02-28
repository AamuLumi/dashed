import SimpleSchema from "simpl-schema";
import { Project, PROJECT_SCHEMA } from "./project.model";

export interface Task {
	name: string;
	description: string;
	deadline: Date;
	color: string;
	state: number;
	project: Project;
	_id: string;
}

export const TASK_SCHEMA = new SimpleSchema({
	name: {type: String},
	description: {type: String, optional: true},
	deadline: {type: Date, optional: true},
	color: {type: String, optional: true},
	project: {type: PROJECT_SCHEMA},
	state: {type: Number, defaultValue: 0}
});

export class DefaultTask implements Task {
	name: string;
	description: string;
	deadline: Date;
	color: string;
	state: number;
	project: Project;
	_id: string;

	constructor() {
	}
}
