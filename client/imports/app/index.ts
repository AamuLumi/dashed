export * from "./app.component";
export * from "./app.module";

if (Meteor.isClient) {
	var _logout = Meteor.logout;
	Meteor.logout = function customLogout() {
		// Do your thing here
		_logout.apply(Meteor, arguments);
	}
}