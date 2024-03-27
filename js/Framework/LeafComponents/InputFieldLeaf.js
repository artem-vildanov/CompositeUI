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
import { LeafComponent } from "../AbstractComponents/LeafComponent.js";
var InputFieldLeaf = /** @class */ (function (_super) {
    __extends(InputFieldLeaf, _super);
    function InputFieldLeaf(componentParams) {
        var _this = _super.call(this, componentParams) || this;
        _this.defaultCssClass = 'form-control m-1';
        _this.html = _this.makeLeafHtml();
        return _this;
    }
    InputFieldLeaf.prototype.makeComponentHtml = function () {
        var inputFieldCssClass = this.componentParams.cssClass === '' ? this.defaultCssClass : this.componentParams.cssClass;
        return "<input type=\"".concat(this.componentParams.type, "\" class=\"").concat(inputFieldCssClass, "\" placeholder=\"").concat(this.componentParams.text, "\" style=\"").concat(this.componentParams.getStyles(), "\">");
    };
    return InputFieldLeaf;
}(LeafComponent));
export { InputFieldLeaf };
//# sourceMappingURL=InputFieldLeaf.js.map