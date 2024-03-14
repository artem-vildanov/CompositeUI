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
var ProxyComponent = /** @class */ (function (_super) {
    __extends(ProxyComponent, _super);
    function ProxyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProxyComponent.prototype.validateComponentParams = function () {
        this.validateBackgroundColor();
        this.validateColor();
        this.validateFontSize();
        this.validateFontStyle();
        this.validateFontWeight();
    };
    ProxyComponent.prototype.validateColor = function () {
    };
    ProxyComponent.prototype.validateBackgroundColor = function () {
    };
    ProxyComponent.prototype.validateFontSize = function () {
    };
    ProxyComponent.prototype.validateFontStyle = function () {
    };
    ProxyComponent.prototype.validateFontWeight = function () {
    };
    return ProxyComponent;
}(Component));
export { ProxyComponent };
//# sourceMappingURL=ComponentProxy.js.map