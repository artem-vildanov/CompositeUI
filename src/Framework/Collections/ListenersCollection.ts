import {Collection} from "./Collection";
import {EventListener} from "../Events/EventListener";
import {Iterator} from "./Iterator";
import {Event} from "../Events/Event";

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