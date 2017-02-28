import { Component } from "@angular/core";

import { Project } from "../../../../both/models/project.model";

import template from "./dashboard.component.html";
import style from "./dashboard.component.scss";

@Component({
	selector: "dashboard",
	template,
	styles: [style]
})

export class DashboardComponent {

	selectedProject: Project = undefined;

	onSelectProject(p: Project) {
		this.selectedProject = p;
	}
}