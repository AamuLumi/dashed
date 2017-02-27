import { MongoObservable } from "meteor-rxjs";
import {Task, TaskSchema} from "../models/task.model";

const collection = new Mongo.Collection<Task>("task-collection");
collection.attachSchema(TaskSchema);
export const TaskCollection = new MongoObservable.Collection<Task>(collection);
