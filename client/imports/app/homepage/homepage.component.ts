import {Component, OnInit} from '@angular/core';

import {Task} from '../../../../both/models/task.model';
import {State, STATES} from '../tools/states';

import template from './homepage.component.html';
import style from './homepage.component.scss';
import {TaskDataService} from "../task/task.service";

@Component({
	selector: 'homepage',
	template,
	styles: [style]
})
export class HomePageComponent implements OnInit {
	tasks: Task[] = [];
	tasksStats: Number[] = [];
	states: State[] = STATES;

	constructor(private taskDataService: TaskDataService) {
	}

	ngOnInit(): void {
		this.taskDataService.getData().zone().subscribe({
			next: (tasks) => {
				this.tasks = tasks;
				for (let i = 0; i < this.states.length; i++) {
					this.tasksStats[i] = this.tasks.reduce(
						(acc, t) => acc + (t.state === i ? 1 : 0), 0);
				}

			}
		});
	}

	disconnect(): void {
		Meteor.logout((err) => {
			if (err) console.log(err);
			else {
				window.location.reload();
			}
		});
		console.log('called');
	}

}