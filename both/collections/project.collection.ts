import { MongoObservable } from "meteor-rxjs";
import {Project, ProjectSchema} from "../models/project.model";

const collection = new Mongo.Collection<Project>("project-collection");
collection.attachSchema(ProjectSchema);
export const ProjectCollection = new MongoObservable.Collection<Project>(collection);
