import {Collection} from "./Collection";
import {EventListener} from "../Events/EventListener";
import {Iterator} from "./Iterator";
import {Event} from "../Events/Event";
import {Component} from "../AbstractComponents/Component";

export class ChildrenComponentsCollection extends Collection<Component> {
    constructor(collection: Array<Component>) {
        super(collection);
    }

    getIterator(): Iterator<Component> {
        return new this.listenersIterator(this.collection);
    }

    private listenersIterator = class extends Iterator<Component> {
        protected iteratorPosition: number = 0

        constructor(collection: Array<Component>) {
            super(collection)
        }


    }
}