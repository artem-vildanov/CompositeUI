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
var ButtonLeaf = /** @class */ (function (_super) {
    __extends(ButtonLeaf, _super);
    function ButtonLeaf(componentParams) {
        var _this = _super.call(this, componentParams) || this;
        _this.defaultCssClass = 'btn btn-dark';
        _this.html = _this.makeLeafHtml();
        return _this;
    }
    ButtonLeaf.prototype.makeComponentHtml = function () {
        var buttonCssClass = this.componentParams.cssClass === '' ? this.defaultCssClass : this.componentParams.cssClass;
        return "<button type=\"".concat(this.componentParams.type, "\" class=\"").concat(buttonCssClass, "\" style=\"").concat(this.componentParams.getStyles(), "\">").concat(this.componentParams.text, "</button>");
    };
    return ButtonLeaf;
}(LeafComponent));
export { ButtonLeaf };
//# sourceMappingURL=ButtonLeaf.js.map