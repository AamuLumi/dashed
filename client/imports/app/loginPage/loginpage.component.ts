import {Component} from '@angular/core';

import template from './loginpage.component.html';
import style from './loginpage.component.scss';

@Component({
	selector: 'login-page',
	template,
	styles : [style]
})
export class LoginPageComponent {
	username: string = '';
	password: string = '';

	constructor(){

	}

	authenticate(): void{
		Meteor.loginWithPassword(this.username, this.password, (err) => {
			if (err){
				console.log(err);
			}
		})
	}
}