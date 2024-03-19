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
    Component.prototype.addOnMouseOverHtmlAttribute = function () {
        if (!this.html) {
            throw Error('failed to add onmouseout attr');
        }
        var htmlArray = this.html.split(" ");
        var onMouseOverAttr = "onmouseover=\"componentsCollection.find('".concat(this.componentId, "').mouseOverNotify()\"");
        htmlArray.splice(1, 0, onMouseOverAttr);
        var updatedHtml = htmlArray.join(" ");
        this.html = updatedHtml;
        this.updateNotify();
    };
    Component.prototype.addOnMouseOutHtmlAttribute = function () {
        if (!this.html) {
            throw Error('failed to add onmouseout attr');
        }
        var htmlArray = this.html.split(" ");
        var onMouseOutAttr = "onmouseout=\"componentsCollection.find('".concat(this.componentId, "').mouseOutNotify()\"");
        htmlArray.splice(1, 0, onMouseOutAttr);
        var updatedHtml = htmlArray.join(" ");
        this.html = updatedHtml;
        this.updateNotify();
    };
    Component.prototype.addOnClickHtmlAttribute = function () {
        if (!this.html) {
            throw Error('failed to add onclick attr');
        }
        var htmlArray = this.html.split(" ");
        var onClickAttr = "onclick=\"componentsCollection.find('".concat(this.componentId, "').clickNotify()\"");
        htmlArray.splice(1, 0, onClickAttr);
        var updatedHtml = htmlArray.join(" ");
        this.html = updatedHtml;
        this.updateNotify();
    };
    // EventProducer implementation
    Component.prototype.attachClickListener = function (eventListener, actionCallback) {
        var event = new Event(eventListener, actionCallback);
        this.componentParams.clickListeners.add(event);
        this.addOnClickHtmlAttribute();
    };
    Component.prototype.attachMouseOutListener = function (eventListener, actionCallback) {
        var event = new Event(eventListener, actionCallback);
        this.componentParams.mouseOutListeners.add(event);
        this.addOnMouseOutHtmlAttribute();
    };
    Component.prototype.attachMouseOverListener = function (eventListener, actionCallback) {
        var event = new Event(eventListener, actionCallback);
        this.componentParams.mouseOverListeners.add(event);
        this.addOnMouseOverHtmlAttribute();
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
    // оповестить подписчиков об изменении: произошло обновление объекта
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