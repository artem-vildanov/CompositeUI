var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from "./Component.js";
var LeafComponent = /** @class */ (function (_super) {
    __extends(LeafComponent, _super);
    function LeafComponent(componentParams) {
        return _super.call(this, componentParams) || this;
    }
    // EventListener implementation
    LeafComponent.prototype.clickHappened = function (actionCallback) {
        actionCallback.bind(this);
        actionCallback();
        this.html = this.makeLeafHtml();
        this.updateNotify();
    };
    LeafComponent.prototype.mouseOutHappened = function (actionCallback) {
        actionCallback.bind(this);
        actionCallback();
        this.html = this.makeLeafHtml();
        this.updateNotify();
    };
    LeafComponent.prototype.mouseOverHappened = function (actionCallback) {
        actionCallback.bind(this);
        actionCallback();
        this.html = this.makeLeafHtml();
        this.updateNotify();
    };
    LeafComponent.prototype.updateHappened = function () {
        this.html = this.makeLeafHtml();
    };
    return LeafComponent;
}(Component));
export { LeafComponent };
//# sourceMappingURL=LeafComponent.js.map