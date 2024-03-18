
import { EventsCollection } from "../Collections/EventsCollection.js";
import {EventListener} from "./EventListener";
import {Collection} from "../Collections/Collection";
import {Event} from "./Event";


export interface EventProducer {
    clickListeners: Collection<Event>
    mouseOverListeners: Collection<Event>
    mouseOutListeners: Collection<Event>

    attachClickListener(eventListener: EventListener = this, actionCallback: () => void): void;
    attachMouseOverListener(eventListener: EventListener = this, actionCallback: () => void): void;
    attachMouseOutListener(eventListener: EventListener = this, actionCallback: () => void): void;
    attachUpdateListener(eventListener: EventListener): void;

    // detachMouseOverListener(eventListener: EventListener): void;
    // detachClickListener(listener: EventListener): void;
    // detachMouseOutListener(eventListener: EventListener): void;

    clickNotify(): void;
    mouseOverNotify(): void;
    mouseOutNotify(): void;
    updateNotify(): void;
}