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

    protected abstract makeComponentHtml(): string;

    getComponentParams(): ComponentParams {
        return this.componentParams
    }

    getHtml(): string {
        return this.html;
    }

    // interfaces implementations

    private addOnMouseOverHtmlAttribute(): void { 
        if (!this.html) {
            throw Error('failed to add onmouseout attr')
        }

        const htmlArray = this.html.split(" ")
        const onMouseOverAttr = `onmouseover="componentsCollection.find('${this.componentId}').mouseOverNotify()"`

        htmlArray.splice(1, 0, onMouseOverAttr)
        const updatedHtml = htmlArray.join(" ")
        
        this.html = updatedHtml
        this.updateNotify()
    }

    private addOnMouseOutHtmlAttribute(): void {
        if (!this.html) {
            throw Error('failed to add onmouseout attr')
        }

        const htmlArray = this.html.split(" ")
        const onMouseOutAttr = `onmouseout="componentsCollection.find('${this.componentId}').mouseOutNotify()"`

        htmlArray.splice(1, 0, onMouseOutAttr)
        const updatedHtml = htmlArray.join(" ")
        
        this.html = updatedHtml
        this.updateNotify()
    }

    private addOnClickHtmlAttribute(): void {
        if (!this.html) {
            throw Error('failed to add onclick attr')
        }

        const htmlArray = this.html.split(" ")
        const onClickAttr = `onclick="componentsCollection.find('${this.componentId}').clickNotify()"`

        htmlArray.splice(1, 0, onClickAttr)
        const updatedHtml = htmlArray.join(" ")
        
        this.html = updatedHtml
        this.updateNotify()
    }

    // EventProducer implementation
    attachClickListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.componentParams.clickListeners.add(event)
        this.addOnClickHtmlAttribute()
    }

    attachMouseOutListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.componentParams.mouseOutListeners.add(event)
        this.addOnMouseOutHtmlAttribute()
    }

    attachMouseOverListener(eventListener: EventListener, actionCallback: () => void): void {
        const event = new Event(eventListener, actionCallback)
        this.componentParams.mouseOverListeners.add(event)
        this.addOnMouseOverHtmlAttribute()
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

    // оповестить подписчиков об изменении: произошло обновление объекта
    updateNotify(): void {
        const iterator = this.componentParams.updateListeners.getIterator()
        while (iterator.hasNext()) {
            const eventListener = iterator.next()
            eventListener.updateHappened()
        }
    }

    // EventListener methods
    clickHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeComponentHtml();
        this.updateNotify()
    }

    mouseOutHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeComponentHtml();
        this.updateNotify()
    }

    mouseOverHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeComponentHtml();
        this.updateNotify()
    }

    updateHappened(): void {
        this.html = this.makeComponentHtml()
        this.updateNotify()
    }

}
