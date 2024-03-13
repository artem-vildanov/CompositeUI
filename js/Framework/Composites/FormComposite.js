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
import { CompositeComponent } from "../CompositeComponent.js";
var FormComposite = /** @class */ (function (_super) {
    __extends(FormComposite, _super);
    function FormComposite(text, cssClass) {
        if (cssClass === void 0) { cssClass = 'card p-4 w-75 d-flex flex-column justify-content-center align-items-center'; }
        var _this = _super.call(this, text, cssClass) || this;
        _this.html = _this.makeCompositeHtml();
        return _this;
    }
    FormComposite.prototype.makeCompositeHtml = function () {
        var childrenComponentsHtmlGroup = this.makeChildrenComponentsHtml();
        var childrenHtml = childrenComponentsHtmlGroup.join("");
        return "<div class=\"".concat(this.cssClass, "\">\n                    <h3>").concat(this.text, "</h3>\n                    ").concat(childrenHtml, "\n                </div>");
    };
    return FormComposite;
}(CompositeComponent));
export { FormComposite };
//# sourceMappingURL=FormComposite.js.map