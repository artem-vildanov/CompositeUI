import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import {EventProducer} from "../Events/EventProducer.js";
import {EventsCollection} from "../Collections/EventsCollection.js";
import {Event} from "../Events/Event.js";
import {EventListenerImp} from "../Events/EventListenerImp.js";
import {EventListener} from "../Events/EventListener.js";
import {ListenersCollection} from "../Collections/ListenersCollection";
import {Collection} from "../Collections/Collection";


export abstract class Component implements EventProducer, EventListener {
    protected html: string = '';
    protected abstract defaultCssClass: string;

    // EventProducer implementation
    clickListeners: Collection<Event> = new EventsCollection(new Array<Event>());
    mouseOutListeners: Collection<Event>  = new EventsCollection(new Array<Event>());
    mouseOverListeners: Collection<Event> = new EventsCollection(new Array<Event>());
    updateListeners: Collection<EventListener> = new ListenersCollection(new Array<EventListener>())
    // EventProducer implementation

    protected constructor(protected componentParams: ComponentParams) {}

    getComponentParams(): ComponentParams {
        return this.componentParams
    }

    getHtml(): string {
        return this.html;
    }

    // EventProducer implementation
    attachClickListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.clickListeners.add(event)
    }

    attachMouseOutListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.mouseOutListeners.add(event)
    }

    attachMouseOverListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.mouseOverListeners.add(event)
    }

    attachUpdateListener(eventListener: EventListener) {
        this.updateListeners.add(eventListener)
    }

    // detachClickListener(listener: EventListener): void {
    // }
    //
    // detachMouseOutListener(eventListener: EventListener): void {
    // }
    //
    // detachMouseOverListener(eventListener: EventListener): void {
    // }

    mouseOutNotify(): void {
        const iterator = this.mouseOutListeners.getIterator()
        while (iterator.hasNext()) {
            const eventAction = iterator.next().action
            const eventListener = iterator.next().eventListener
            eventListener.mouseOutHappened(eventAction)
        }
    }

    clickNotify(): void {
        const iterator = this.clickListeners.getIterator()
        while (iterator.hasNext()) {
            const eventAction = iterator.next().action
            const eventListener = iterator.next().eventListener
            eventListener.clickHappened(eventAction)
        }
    }

    mouseOverNotify(): void {
        const iterator = this.mouseOverListeners.getIterator()
        while (iterator.hasNext()) {
            const eventAction = iterator.next().action
            const eventListener = iterator.next().eventListener
            eventListener.mouseOverHappened(eventAction)
        }
    }

    updateNotify(): void {
        const iterator = this.updateListeners.getIterator()
        while (iterator.hasNext()) {
            const eventListener = iterator.next()
            eventListener.updateHappened()
        }
    }

    protected abstract updateHappened(): void
    protected abstract clickHappened(actionCallback: () => void): void
    protected abstract mouseOutHappened(actionCallback: () => void): void
    protected abstract mouseOverHappened(actionCallback: () => void): void
}
