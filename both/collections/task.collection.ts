import { MongoObservable } from "meteor-rxjs";
import {Task, TASK_SCHEMA} from "../models/task.model";

const collection = new Mongo.Collection<Task>("task-collection");
collection.attachSchema(TASK_SCHEMA);
export const TASK_COLLECTION = new MongoObservable.Collection<Task>(collection);
