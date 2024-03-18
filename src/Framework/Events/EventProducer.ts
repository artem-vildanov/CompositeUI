
import {EventListener} from "./EventListener.js";


export interface EventProducer {

    attachClickListener(eventListener: EventListener, actionCallback: () => void): void;
    attachMouseOverListener(eventListener: EventListener, actionCallback: () => void): void;
    attachMouseOutListener(eventListener: EventListener, actionCallback: () => void): void;
    attachUpdateListener(eventListener: EventListener): void;

    // detachMouseOverListener(eventListener: EventListener): void;
    // detachClickListener(listener: EventListener): void;
    // detachMouseOutListener(eventListener: EventListener): void;

    clickNotify(): void;
    mouseOverNotify(): void;
    mouseOutNotify(): void;
    updateNotify(): void;
}