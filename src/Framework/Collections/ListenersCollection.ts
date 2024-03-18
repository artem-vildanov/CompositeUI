import {Collection} from "./Collection.js";
import {EventListener} from "../Events/EventListener.js";
import {Iterator} from "./Iterator.js";

export class ListenersCollection extends Collection<EventListener> {
    constructor(collection: Array<EventListener>) {
        super(collection);
    }

    getIterator(): Iterator<EventListener> {
        return new this.listenersIterator(this.collection);
    }

    private listenersIterator = class extends Iterator<EventListener> {
        protected iteratorPosition: number = 0

        constructor(collection: Array<EventListener>) {
            super(collection)
        }
    }
}