import {EventListener} from "./EventListener";

export class Event {
    constructor(
        public eventListener: EventListener,
        public action: () => void
    ) {}
}