import {
	Component,
	Input,
	OnInit,
	trigger,
	state,
	transition,
	animate,
	style
} from "@angular/core";
import { Task } from "../../../../both/models/task.model";
import { COLORS } from "../tools/colors";

import template from "./task.component.html";
import styleCss from "./task.component.scss";
import { TaskDataService } from "./task.service";

@Component({
	selector: "task",
	template,
	styles: [styleCss],
	animations: [
		trigger("appear", [
			state("in", style({opacity: 1})),
			transition(":enter", [
				style({opacity: 0}),
				animate(".25s ease-in")
			]),
			transition(":leave", [
				style({opacity: 0}),
				animate(".25s ease-out")
			])
		])
	]
})

export class TaskComponent implements OnInit {
	COLORS: Object = Object.keys(COLORS).map((key) => {
			return {
				value: COLORS[key],
				name: key[0].toUpperCase() + key.substring(1)
			};
		}
	);

	@Input()
	task: Task;

	@Input()
	selected: boolean = false;

	@Input()
	editMode: boolean = false;

	@Input()
	onEdit: Function;

	constructor(private taskDataService: TaskDataService) {
	}

	ngOnInit(): void {
	}

	onDragStart(event): void {
		event.dataTransfer.setData("text", this.task._id);
		event.dropEffect = "move";
	}

	removeTask(): void {
		this.taskDataService.deleteTask(this.task);
	}

	switchEdit(): void {
		this.editMode = !this.editMode;
	}

	cancelEdit(): void {
		this.switchEdit();

		if (this.onEdit) {
			this.onEdit();
		}
	}

	editTask(): void {
		console.log(this.task);
		this.switchEdit();
		this.taskDataService.updateTask(this.task);

		if (this.onEdit) {
			this.onEdit();
		}
	}
}