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
import { ComponentProxy } from "../AbstractViewComponents/ComponentProxy.js";
import { ButtonLeaf } from "./ButtonLeaf.js";
var ButtonLeafProxy = /** @class */ (function (_super) {
    __extends(ButtonLeafProxy, _super);
    function ButtonLeafProxy(componentParams) {
        var _this = _super.call(this, componentParams) || this;
        _this.buttonValidation();
        return _this;
    }
    ButtonLeafProxy.prototype.getHtml = function () {
        return new ButtonLeaf(this.componentParams).getHtml();
    };
    ButtonLeafProxy.prototype.buttonValidation = function () {
        this.validateComponentParams();
        if (this.componentParams.cssClass === '') {
            this.componentParams.cssClass = 'btn btn-dark';
        }
    };
    return ButtonLeafProxy;
}(ComponentProxy));
export { ButtonLeafProxy };
//# sourceMappingURL=ButtonLeafProxy.js.map