import Parameters from '../../../local.env';

export class Main {
	start(): void {
		this.initData();
	}

	initData(): void {
		if (!Accounts.findUserByUsername(Parameters.user)){
			Accounts.createUser({
				username: Parameters.user,
				password: Parameters.password
			});
		}
	}
}
