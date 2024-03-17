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
import { TextAreaLeaf } from "./TextAreaLeaf.js";
var TextAreaLeafProxy = /** @class */ (function (_super) {
    __extends(TextAreaLeafProxy, _super);
    function TextAreaLeafProxy(componentParams) {
        return _super.call(this, componentParams) || this;
    }
    TextAreaLeafProxy.prototype.textAreaValidation = function () {
        this.validateComponentParams();
        if (this.componentParams.cssClass === '') {
            this.componentParams.cssClass = 'm-1';
        }
    };
    TextAreaLeafProxy.prototype.getHtml = function () {
        this.textAreaValidation();
        return new TextAreaLeaf(this.componentParams).getHtml();
    };
    return TextAreaLeafProxy;
}(ComponentProxy));
export { TextAreaLeafProxy };
//# sourceMappingURL=TextAreaLeafProxy.js.map