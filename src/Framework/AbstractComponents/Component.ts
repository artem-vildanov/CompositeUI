import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import {EventProducer} from "../Events/EventProducer.js";
import {Event} from "../Events/Event.js";
import {EventListener} from "../Events/EventListener.js";


export abstract class Component implements EventProducer, EventListener {
    readonly componentId: string;
    protected html: string = '';
    protected abstract defaultCssClass: string;

    protected constructor(protected componentParams: ComponentParams) {
        this.componentId = this.generateComponentId()
    }

    private generateComponentId(): string {
        return Math.random().toString(36).substring(1, 6) + Math.random().toString().substring(3);
    }

    getComponentParams(): ComponentParams {
        return this.componentParams
    }

    getHtml(): string {
        return this.html;
    }

    // EventProducer implementation
    attachClickListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.componentParams.clickListeners.add(event)
    }

    attachMouseOutListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.componentParams.mouseOutListeners.add(event)
    }

    attachMouseOverListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.componentParams.mouseOverListeners.add(event)
    }

    attachUpdateListener(eventListener: EventListener) {
        this.componentParams.updateListeners.add(eventListener)
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
        const iterator = this.componentParams.mouseOutListeners.getIterator()
        while (iterator.hasNext()) {
            const event = iterator.next()
            const eventAction = event.action
            const eventListener = event.eventListener
            eventListener.mouseOutHappened(eventAction)
        }
    }

    clickNotify(): void {
        const iterator = this.componentParams.clickListeners.getIterator()
        while (iterator.hasNext()) {
            const event = iterator.next()
            const eventAction = event.action
            const eventListener = event.eventListener
            eventListener.clickHappened(eventAction)
        }
    }

    mouseOverNotify(): void {
        const iterator = this.componentParams.mouseOverListeners.getIterator()
        while (iterator.hasNext()) {
            const event = iterator.next()
            const eventAction = event.action
            const eventListener = event.eventListener
            eventListener.mouseOverHappened(eventAction)
        }
    }

    updateNotify(): void {
        const iterator = this.componentParams.updateListeners.getIterator()
        while (iterator.hasNext()) {
            const eventListener = iterator.next()
            eventListener.updateHappened()
        }
    }

    abstract updateHappened(): void
    abstract clickHappened(actionCallback: () => void): void
    abstract mouseOutHappened(actionCallback: () => void): void
    abstract mouseOverHappened(actionCallback: () => void): void
}
