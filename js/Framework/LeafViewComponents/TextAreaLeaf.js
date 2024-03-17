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
import { LeafComponent } from "../AbstractViewComponents/LeafComponent.js";
var TextAreaLeaf = /** @class */ (function (_super) {
    __extends(TextAreaLeaf, _super);
    function TextAreaLeaf(componentParams) {
        var _this = _super.call(this, componentParams) || this;
        _this.html = _this.makeLeafHtml();
        return _this;
    }
    TextAreaLeaf.prototype.makeLeafHtml = function () {
        return "<div class=\"".concat(this.componentParams.cssClass, "\" style=\"").concat(this.componentParams.getStyles(), "\">").concat(this.componentParams.text, "</div>");
    };
    return TextAreaLeaf;
}(LeafComponent));
export { TextAreaLeaf };
//# sourceMappingURL=TextAreaLeaf.js.map