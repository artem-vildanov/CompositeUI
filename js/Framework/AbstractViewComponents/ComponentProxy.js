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
var ComponentProxy = /** @class */ (function (_super) {
    __extends(ComponentProxy, _super);
    function ComponentProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentProxy.prototype.validateComponentParams = function () {
        this.validateChildren();
        this.validateBackgroundColor();
        this.validateColor();
        this.validateFontSize();
        this.validateFontStyle();
        this.validateFontWeight();
    };
    ComponentProxy.prototype.validateChildren = function () {
        var callerClassName = this.constructor.prototype.constructor.name;
        // Check if caller class is LeafComponent
        if (callerClassName.indexOf('Leaf') > 0 && this.componentParams.childrenComponents.length !== 0) {
            throw Error("".concat(callerClassName, " cannot have children components, but children components are provided"));
        }
    };
    ComponentProxy.prototype.validateColor = function () {
    };
    ComponentProxy.prototype.validateBackgroundColor = function () {
    };
    ComponentProxy.prototype.validateFontSize = function () {
    };
    ComponentProxy.prototype.validateFontStyle = function () {
    };
    ComponentProxy.prototype.validateFontWeight = function () {
    };
    return ComponentProxy;
}(Component));
export { ComponentProxy };
//# sourceMappingURL=ComponentProxy.js.map