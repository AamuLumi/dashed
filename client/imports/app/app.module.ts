import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {Ng2DatetimePickerModule} from "ng2-datetime-picker";
import {MomentModule} from 'angular2-moment';
import {AppComponent} from "./app.component";

import {AppRoutingModule} from './app-routing.module';

import {TaskDataService} from "./task/task.service";
import {TaskComponent} from "./task/task.component";
import {TaskBoardComponent} from "./taskBoard/taskboard.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TaskFormComponent} from "./taskForm/taskform.component";
import {ProjectDataService} from "./project/project.service";
import {ProjectSliderComponent} from "./projectSlider/projectslider.component";
import {ScrollContainerComponent} from "./scrollContainer/scrollcontainer.component";
import {HomePageComponent} from "./homepage/homepage.component";
import {MainComponent} from "./mainComponent/maincomponent.component";
import {LoginPageComponent} from "./loginPage/loginpage.component";


@NgModule({
	// Components, Pipes, Directive
	declarations: [
		AppComponent,
		TaskBoardComponent,
		TaskComponent,
		DashboardComponent,
		TaskFormComponent,
		ProjectSliderComponent,
		ScrollContainerComponent,
		HomePageComponent,
		MainComponent,
		LoginPageComponent
	],
	// Entry Components
	entryComponents: [
		AppComponent
	],
	// Providers
	providers: [
		TaskDataService,
		ProjectDataService
	],
	// Modules
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		Ng2DatetimePickerModule,
		MomentModule
	],
	// Main Component
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {

	}
}
