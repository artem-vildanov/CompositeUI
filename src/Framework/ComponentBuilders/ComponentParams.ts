import {Component} from "../AbstractComponents/Component.js";
import { ComponentsCollection } from "../Collections/ComponentsCollection.js";
import { Collection } from "../Collections/Collection.js";
import { EventsCollection } from "../Collections/EventsCollection.js";
import { ListenersCollection } from "../Collections/ListenersCollection.js";
import { Event } from "../Events/Event.js";
import { EventListener } from "../Events/EventListener.js";

export class ComponentParams {
    color: string = '';
    backgroundColor: string = '';
    backgroundImage: string = '';
    fontSize: string = '';
    fontWeight: string = '';
    fontStyle: string = '';
    width: string = '';
    height: string = '';
    padding: string = '';
    margin: string = '';
    text: string = '';
    type: string = ''; // only for InputFieldLeaf
    cssClass: string = '';
    listItemCssClass: string = ''; // only for ListComposite
    childrenComponents: ComponentsCollection = new ComponentsCollection(new Array<Component>) // only for CompositeComponents
    clickListeners: Collection<Event> = new EventsCollection(new Array<Event>());
    mouseOutListeners: Collection<Event>  = new EventsCollection(new Array<Event>());
    mouseOverListeners: Collection<Event> = new EventsCollection(new Array<Event>());
    updateListeners: Collection<EventListener> = new ListenersCollection(new Array<EventListener>())

    getStyles(): string {
        return this.color
            + this.backgroundColor
            + this.backgroundImage
            + this.fontSize
            + this.fontWeight
            + this.fontStyle
            + this.width
            + this.height
            + this.padding
            + this.margin
    }
}