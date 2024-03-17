import { Collection } from "../Collections/Collection";
import { EventsCollection } from "../Collections/EventsCollection";
import { Event } from "./Event";

export interface EventProducer {
    clickListeners: EventsCollection
    mouseOnListeners: EventsCollection
    mouseOverListeners: EventsCollection

    attachClickListener(event: Event): void;
    detachClickListener(listener: EventListener): void;

    clickNotify(): void;
    mouseOverNotify(): void;
    mouseOutNotify(): void;
}