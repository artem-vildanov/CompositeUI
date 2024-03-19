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
var CompositeComponent = /** @class */ (function (_super) {
    __extends(CompositeComponent, _super);
    function CompositeComponent(componentParams) {
        var _this = _super.call(this, componentParams) || this;
        _this.childrenComponents = componentParams.childrenComponents;
        return _this;
    }
    // Массив html кодов дочерних компонентов
    CompositeComponent.prototype.makeChildrenComponentsHtml = function () {
        var childrenHtml = new Array();
        var childrenIterator = this.childrenComponents.getIterator();
        while (childrenIterator.hasNext()) {
            var childComponent = childrenIterator.next();
            var componentHtml = childComponent.getHtml();
            childrenHtml.push(componentHtml);
        }
        return childrenHtml;
    };
    CompositeComponent.prototype.clickHappened = function (actionCallback) {
        actionCallback.bind(this);
        actionCallback();
        this.html = this.makeCompositeHtml();
        this.updateNotify();
    };
    CompositeComponent.prototype.mouseOutHappened = function (actionCallback) {
        actionCallback.bind(this);
        actionCallback();
        this.html = this.makeCompositeHtml();
        this.updateNotify();
    };
    CompositeComponent.prototype.mouseOverHappened = function (actionCallback) {
        actionCallback.bind(this);
        actionCallback();
        this.html = this.makeCompositeHtml();
        this.updateNotify();
    };
    CompositeComponent.prototype.updateHappened = function () {
        this.html = this.makeCompositeHtml();
        this.updateNotify();
        console.log('composite component update');
    };
    return CompositeComponent;
}(Component));
export { CompositeComponent };
//# sourceMappingURL=CompositeComponent.js.map