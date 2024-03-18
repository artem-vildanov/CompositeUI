import {EventListener} from "./EventListener.js";

export class EventListenerImp implements EventListener {
    private static instance: EventListener|null = null

    private constructor() {}

    static getInstance(): EventListener {
        if (this.instance === null) {
            this.instance = new EventListenerImp()
        }

        return this.instance
    }

    clickHappened(actionCallback: () => void): void {
        actionCallback()
    }

    mouseOutHappened(actionCallback: () => void): void {
        actionCallback()
    }

    mouseOverHappened(actionCallback: () => void): void {
        actionCallback()
    }

}