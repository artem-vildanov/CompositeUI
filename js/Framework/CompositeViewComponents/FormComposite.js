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
import { CompositeComponent } from "../AbstractViewComponents/CompositeComponent.js";
var FormComposite = /** @class */ (function (_super) {
    __extends(FormComposite, _super);
    function FormComposite(componentParams) {
        var _this = _super.call(this, componentParams) || this;
        _this.html = _this.makeCompositeHtml();
        return _this;
    }
    FormComposite.prototype.makeCompositeHtml = function () {
        var childrenComponentsHtmlGroup = this.makeChildrenComponentsHtml();
        var childrenHtml = childrenComponentsHtmlGroup.join("");
        var formHtmlDeclaration = this.makeFormHtmlDeclaration();
        var formHtmlBody = this.makeFormHtmlBody(childrenHtml);
        var formHtmlCloseBracket = "</div>";
        return formHtmlDeclaration + formHtmlBody + formHtmlCloseBracket;
    };
    FormComposite.prototype.makeFormHtmlDeclaration = function () {
        return "<div class=\"".concat(this.componentParams.css, "\" style=\"").concat(this.componentParams.getStyles(), "\">");
    };
    FormComposite.prototype.makeFormHtmlBody = function (childrenHtml) {
        var formText = '';
        if (this.componentParams.text !== '') {
            formText = "<h1>".concat(this.componentParams.text, "</h1>");
        }
        return formText + childrenHtml;
    };
    return FormComposite;
}(CompositeComponent));
export { FormComposite };
//# sourceMappingURL=FormComposite.js.map