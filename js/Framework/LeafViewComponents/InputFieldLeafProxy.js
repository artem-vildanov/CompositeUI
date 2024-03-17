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
import { InputFieldLeaf } from "./InputFieldLeaf.js";
var InputFieldLeafProxy = /** @class */ (function (_super) {
    __extends(InputFieldLeafProxy, _super);
    function InputFieldLeafProxy(componentParams) {
        return _super.call(this, componentParams) || this;
    }
    InputFieldLeafProxy.prototype.inputFieldValidation = function () {
        this.validateComponentParams();
        if (this.componentParams.cssClass === '') {
            this.componentParams.cssClass = 'form-control m-1';
        }
    };
    InputFieldLeafProxy.prototype.renderHtml = function () {
        this.inputFieldValidation();
        return new InputFieldLeaf(this.componentParams).renderHtml();
    };
    return InputFieldLeafProxy;
}(ComponentProxy));
export { InputFieldLeafProxy };
//# sourceMappingURL=InputFieldLeafProxy.js.map