import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Project } from "../../../../both/models/project.model";
import { PROJECT_COLLECTION } from "../../../../both/collections/project.collection";

@Injectable()
export class ProjectDataService {
	private data: ObservableCursor<Project>;

	constructor() {
		this.data = PROJECT_COLLECTION.find({});
	}

	public getData(): ObservableCursor<Project> {
		return this.data;
	}

	public createProject(t: Project): void {
		PROJECT_COLLECTION.insert(t).zone();
	}

	public updateProject(t: Project): void {
		if (!t._id) {
			return this.createProject(t);
		}

		let id = t._id;
		delete t._id;
		PROJECT_COLLECTION.update({"_id": id}, {$set: t}).zone();
	}

	public deleteProject(t: Project): void {
		PROJECT_COLLECTION.remove({"_id": t._id}).zone();
	}
}
