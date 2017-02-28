import { Component, OnInit, Input } from "@angular/core";
import { Task, DefaultTask } from "../../../../both/models/task.model";
import { TaskDataService } from "../task/task.service";
import { State, STATES } from "../tools/states";

import template from "./taskboard.component.html";
import style from "./taskboard.component.scss";
import { Project } from "../../../../both/models/project.model";

const NO_TASK = new DefaultTask();

@Component({
	selector: "task-board",
	template,
	styles: [style]
})
export class TaskBoardComponent implements OnInit {
	tasks: Task[] = [];
	selectedTask: Task = NO_TASK;
	states: State[] = STATES;
	creatingTask: Task;

	@Input()
	project: Project;

	constructor(private taskDataService: TaskDataService) {
		this.removeCreatingTask = this.removeCreatingTask.bind(this);
	}

	ngOnInit(): void {
		this.taskDataService.getData().zone().subscribe({
			next: (tasks) => {
				this.tasks = tasks;
				console.log(this.tasks);
			}
		});
	}

	getTasks(i: number): Task[] {
		if (!this.project || this.project.name === "Overview") {
			return this.tasks.filter((t) => t.state === i);
		}

		return this.tasks.filter((t) => t.state === i && t.project && t.project.name === this.project.name);
	}

	onDrop(event): void {
		event.preventDefault();
		let id = event.dataTransfer.getData("text");
		let target = event.target;

		while (target && target.className !== "task-group") {
			target = target.parentNode;
		}

		if (!target || target.className !== "task-group") {
			return;
		}

		let associatedGroup = this.states.find((s) => s.id === target.id);
		let task = this.tasks.find((t) => t._id === id);

		if (!associatedGroup || !task || task.state === associatedGroup.state) {
			return;
		}

		task.state = associatedGroup.state;

		this.taskDataService.updateTask(task);
	}

	allowDrop(event): void {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}

	addTask() {
		this.creatingTask = new DefaultTask();
		this.creatingTask.state = 0;
		this.creatingTask.project = this.project;
		this.tasks.push(this.creatingTask);
	}

	removeCreatingTask() {
		this.tasks.splice(this.tasks.indexOf(this.creatingTask), 1);
		this.creatingTask = undefined;
	}

	selectTask(t: Task): void {
		if (this.selectedTask._id === t._id) {
			this.selectedTask = NO_TASK;
		} else {
			this.selectedTask = t;
		}
	}
}
