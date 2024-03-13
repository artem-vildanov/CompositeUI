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
    function CompositeComponent(text, cssClass) {
        var _this = _super.call(this, text, cssClass) || this;
        _this.childrenComponents = new Array();
        return _this;
    }
    // Массив html кодов дочерних компонентов
    CompositeComponent.prototype.makeChildrenComponentsHtml = function () {
        var childrenComponentsHtmlGroup = new Array();
        this.childrenComponents.forEach(function (component) {
            childrenComponentsHtmlGroup.push(component.renderHtml());
        });
        return childrenComponentsHtmlGroup;
    };
    CompositeComponent.prototype.addChildrenComponents = function (componentsGroup) {
        var _this = this;
        componentsGroup.forEach(function (childComponent) {
            _this.childrenComponents.push(childComponent);
        });
        this.html = this.makeCompositeHtml();
    };
    return CompositeComponent;
}(Component));
export { CompositeComponent };
//# sourceMappingURL=CompositeComponent.js.map