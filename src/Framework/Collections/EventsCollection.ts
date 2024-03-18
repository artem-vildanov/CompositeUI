import { Event } from "../Events/Event.js";
import { Collection } from "./Collection.js";
import { Iterator } from "./Iterator.js";

export class EventsCollection extends Collection<Event> {

    constructor(collection: Array<Event>) {
        super(collection)
    }

    getIterator(): Iterator<Event> {
        return new this.eventIterator(this.collection)
    }

    private eventIterator = class extends Iterator<Event> {
        protected iteratorPosition: number = 0

        constructor(collection: Array<Event>) {
            super(collection)
        }
    }
}

