import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Project, DefaultProject } from "../../../../both/models/project.model";
import { ProjectDataService } from "../project/project.service";

import template from "./projectslider.component.html";
import style from "./projectslider.component.scss";

const OVERVIEW = new DefaultProject();
OVERVIEW.name = "Overview";
OVERVIEW._id = "-1";

@Component({
	selector: "project-slider",
	template,
	styles: [style]
})
export class ProjectSliderComponent implements OnInit {
	projects: Project[] = [OVERVIEW];
	addingProject: boolean = false;
	tmpProject: Project;
	selectedProject: Project = OVERVIEW;

	@Output()
	onSelectProject = new EventEmitter<Project>();

	constructor(private projectDataService: ProjectDataService) {
	}

	ngOnInit(): void {
		this.projectDataService.getData().zone().subscribe({
			next: (tasks) => {
				this.projects = [OVERVIEW];
				this.projects = this.projects.concat(tasks);
			}
		});
	}

	switchAddingProject() {
		if (this.addingProject) {
			this.tmpProject = undefined;
		} else {
			this.tmpProject = new DefaultProject();
		}

		this.addingProject = !this.addingProject;
	}

	createProject() {
		this.projectDataService.createProject(this.tmpProject);
		this.switchAddingProject();
	}

	selectProject(p: Project) {
		this.selectedProject = p;
		this.onSelectProject.emit(this.selectedProject);
	}

	deleteProject() {
		if (!this.selectedProject._id || this.selectedProject._id === "-1") {
			return;
		}

		let p = this.selectedProject;
		this.selectProject(OVERVIEW);
		this.projectDataService.deleteProject(p);
	}
}