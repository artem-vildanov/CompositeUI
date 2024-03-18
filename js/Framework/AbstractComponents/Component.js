import { Event } from "../Events/Event.js";
var Component = /** @class */ (function () {
    function Component(componentParams) {
        this.componentParams = componentParams;
        this.html = '';
        this.componentId = this.generateComponentId();
    }
    Component.prototype.generateComponentId = function () {
        return Math.random().toString(36).substring(1, 6) + Math.random().toString().substring(3);
    };
    Component.prototype.getComponentParams = function () {
        return this.componentParams;
    };
    Component.prototype.getHtml = function () {
        return this.html;
    };
    // EventProducer implementation
    Component.prototype.attachClickListener = function (eventListener, actionCallback) {
        var event = new Event(eventListener, actionCallback);
        this.componentParams.clickListeners.add(event);
    };
    Component.prototype.attachMouseOutListener = function (eventListener, actionCallback) {
        var event = new Event(eventListener, actionCallback);
        this.componentParams.mouseOutListeners.add(event);
    };
    Component.prototype.attachMouseOverListener = function (eventListener, actionCallback) {
        var event = new Event(eventListener, actionCallback);
        this.componentParams.mouseOverListeners.add(event);
    };
    Component.prototype.attachUpdateListener = function (eventListener) {
        this.componentParams.updateListeners.add(eventListener);
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
        var iterator = this.componentParams.mouseOutListeners.getIterator();
        while (iterator.hasNext()) {
            var event_1 = iterator.next();
            var eventAction = event_1.action;
            var eventListener = event_1.eventListener;
            eventListener.mouseOutHappened(eventAction);
        }
    };
    Component.prototype.clickNotify = function () {
        var iterator = this.componentParams.clickListeners.getIterator();
        while (iterator.hasNext()) {
            var event_2 = iterator.next();
            var eventAction = event_2.action;
            var eventListener = event_2.eventListener;
            eventListener.clickHappened(eventAction);
        }
    };
    Component.prototype.mouseOverNotify = function () {
        var iterator = this.componentParams.mouseOverListeners.getIterator();
        while (iterator.hasNext()) {
            var event_3 = iterator.next();
            var eventAction = event_3.action;
            var eventListener = event_3.eventListener;
            eventListener.mouseOverHappened(eventAction);
        }
    };
    Component.prototype.updateNotify = function () {
        var iterator = this.componentParams.updateListeners.getIterator();
        while (iterator.hasNext()) {
            var eventListener = iterator.next();
            eventListener.updateHappened();
        }
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=Component.js.map