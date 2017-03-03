import { MongoObservable } from "meteor-rxjs";
import {Note, NOTE_SCHEMA} from "../models/note.model";

const collection = new Mongo.Collection<Task>("note-collection");
collection.attachSchema(NOTE_SCHEMA);
export const NOTE_COLLECTION = new MongoObservable.Collection<Task>(collection);
