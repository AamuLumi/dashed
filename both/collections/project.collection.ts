import { MongoObservable } from "meteor-rxjs";
import { Project, PROJECT_SCHEMA } from "../models/project.model";

const collection = new Mongo.Collection<Project>("project-collection");
collection.attachSchema(PROJECT_SCHEMA);
export const PROJECT_COLLECTION = new MongoObservable.Collection<Project>(collection);