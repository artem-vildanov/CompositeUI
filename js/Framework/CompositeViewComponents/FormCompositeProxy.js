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
import { FormComposite } from "./FormComposite.js";
var FormCompositeProxy = /** @class */ (function (_super) {
    __extends(FormCompositeProxy, _super);
    function FormCompositeProxy(componentParams) {
        return _super.call(this, componentParams) || this;
    }
    FormCompositeProxy.prototype.formValidation = function () {
        this.validateComponentParams();
        if (this.componentParams.cssClass === '') {
            this.componentParams.cssClass = 'card d-flex flex-column justify-content-center align-items-center';
        }
    };
    FormCompositeProxy.prototype.renderHtml = function () {
        this.formValidation();
        return new FormComposite(this.componentParams).renderHtml();
    };
    return FormCompositeProxy;
}(ComponentProxy));
export { FormCompositeProxy };
//# sourceMappingURL=FormCompositeProxy.js.map