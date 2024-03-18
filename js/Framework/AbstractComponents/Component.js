import { EventsCollection } from "../Collections/EventsCollection.js";
import { Event } from "../Events/Event.js";
import { EventListenerImp } from "../Events/EventListenerImp.js";
var Component = /** @class */ (function () {
    // EventProducer implementation
    function Component(componentParams) {
        this.componentParams = componentParams;
        this.html = '';
        // EventProducer implementation
        this.clickListeners = new EventsCollection(new Array());
        this.mouseOutListeners = new EventsCollection(new Array());
        this.mouseOverListeners = new EventsCollection(new Array());
        this.eventListener = EventListenerImp.getInstance();
    }
    Component.prototype.getComponentParams = function () {
        return this.componentParams;
    };
    Component.prototype.getHtml = function () {
        return this.html;
    };
    // EventProducer implementation
    Component.prototype.attachClickListener = function (actionCallback) {
        var event = new Event(actionCallback);
        this.clickListeners.add(event);
    };
    Component.prototype.attachMouseOutListener = function (actionCallback) {
        var event = new Event(actionCallback);
        this.mouseOutListeners.add(event);
    };
    Component.prototype.attachMouseOverListener = function (actionCallback) {
        var event = new Event(actionCallback);
        this.mouseOverListeners.add(event);
    };
    // detachClickListener(listener: EventListener): void {
    // }
    //
    // detachMouseOutListener(eventListener: EventListener): void {
    // }
    //
    // detachMouseOverListener(eventListener: EventListener): void {
    // }
    Component.prototype.mouseOutNotify = function () {
        var iterator = this.mouseOutListeners.getIterator();
        while (iterator.hasNext()) {
            var eventAction = iterator.next().action;
            this.eventListener.mouseOutHappened(eventAction);
        }
    };
    Component.prototype.clickNotify = function () {
        var iterator = this.clickListeners.getIterator();
        while (iterator.hasNext()) {
            var eventAction = iterator.next().action;
            this.eventListener.clickHappened(eventAction);
        }
    };
    Component.prototype.mouseOverNotify = function () {
        var iterator = this.mouseOverListeners.getIterator();
        while (iterator.hasNext()) {
            var eventAction = iterator.next().action;
            this.eventListener.mouseOverHappened(eventAction);
        }
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=Component.js.map