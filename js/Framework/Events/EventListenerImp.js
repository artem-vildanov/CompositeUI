var EventListenerImp = /** @class */ (function () {
    function EventListenerImp() {
    }
    EventListenerImp.getInstance = function () {
        if (this.instance === null) {
            this.instance = new EventListenerImp();
        }
        return this.instance;
    };
    EventListenerImp.prototype.clickHappened = function (actionCallback) {
        actionCallback();
    };
    EventListenerImp.prototype.mouseOutHappened = function (actionCallback) {
        actionCallback();
    };
    EventListenerImp.prototype.mouseOverHappened = function (actionCallback) {
        actionCallback();
    };
    EventListenerImp.instance = null;
    return EventListenerImp;
}());
export { EventListenerImp };
//# sourceMappingURL=EventListenerImp.js.map