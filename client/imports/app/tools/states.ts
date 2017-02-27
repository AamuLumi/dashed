export const STATES = [{
	name: "To Do",
	color: "#42A5F5",
	id: "task-group-0",
	state: 0
}, {
	name: "Doing",
	color: "#26A69A",
	id: "task-group-1",
	state: 1
}, {
	name: "Done",
	color: "#4CAF50",
	id: "task-group-2",
	state: 2
}];

export interface State {
	name: string;
	color: string;
	id: string;
	state: number;
}