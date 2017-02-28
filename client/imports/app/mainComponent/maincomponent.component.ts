import { Component, NgZone } from "@angular/core";

import template from "./maincomponent.component.html";
import style from "./maincomponent.component.scss";

@Component({
	selector: "main-component",
	template,
	styles: [style]
})
export class MainComponent {
	authenticated: boolean = false;

	constructor(private zone: NgZone) {
		Accounts.onLogin(() => {
			zone.run(() => {
				this.authenticated = (Meteor.user() !== undefined);
			});
		});
	}
}