import SimpleSchema from 'simpl-schema';
import {Project, ProjectSchema} from './project.model';

export interface Task {
	name: string;
	description: string;
	deadline: Date;
	color: string;
	state: number;
	project: Project;
	_id: string;
}

export const TaskSchema = new SimpleSchema ({
	name: {type: String},
	description: {type: String, optional: true},
	deadline: {type: Date, optional: true},
	color: {type: String, optional: true},
	project: {type: ProjectSchema},
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

	constructor() {}
}
