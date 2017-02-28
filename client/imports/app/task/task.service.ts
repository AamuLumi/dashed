import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Task } from "../../../../both/models/task.model";
import { TASK_COLLECTION } from "../../../../both/collections/task.collection";

@Injectable()
export class TaskDataService {
	private data: ObservableCursor<Task>;

	constructor() {
		this.data = TASK_COLLECTION.find({});
	}

	public getData(): ObservableCursor<Task> {
		return this.data;
	}

	public createTask(t: Task): void {
		TASK_COLLECTION.insert(t).zone();
	}

	public updateTask(t: Task): void {
		if (!t._id) {
			return this.createTask(t);
		}

		let id = t._id;
		delete t._id;
		TASK_COLLECTION.update({"_id": id}, {$set: t}).zone();
	}

	public deleteTask(t: Task): void {
		TASK_COLLECTION.remove({"_id": t._id}).zone();
	}
}
