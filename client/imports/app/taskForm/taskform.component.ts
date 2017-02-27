import {Component, Input, OnInit} from '@angular/core';
import {Task, DefaultTask} from '../../../../both/models/task.model';
import {TaskDataService} from "../task/task.service";

import template from './taskform.component.html';
import style from './taskform.component.scss';

@Component({
	selector: 'task-form',
	template,
	styles: [style]
})

export class TaskFormComponent implements OnInit {
	@Input()
	task: Task;

	@Input()
	dismiss: Function;

	constructor(private taskDataService: TaskDataService) {

	}

	ngOnInit(): void {
		if (!this.task)
			this.task = new DefaultTask();

		if (!this.dismiss)
			this.dismiss = () => {
			};
	}

	onSubmit(): void {
		this.task.state = 0;
		this.task.deadline = new Date();
		this.task.description = "aaa";
		this.task.color = "red";
		this.taskDataService.createTask(this.task);
		this.dismiss();
	}

	onCancel(): void {
		this.dismiss();
	}
}