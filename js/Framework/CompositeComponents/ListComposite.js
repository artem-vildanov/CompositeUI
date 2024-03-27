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
import { CompositeComponent } from "../AbstractComponents/CompositeComponent.js";
var ListComposite = /** @class */ (function (_super) {
    __extends(ListComposite, _super);
    function ListComposite(componentParams) {
        var _this = _super.call(this, componentParams) || this;
        _this.defaultCssClass = 'list-group list-group-flush p-2';
        _this.defaultListItemCssClass = 'list-group-item';
        _this.html = _this.makeCompositeHtml();
        return _this;
    }
    ListComposite.prototype.makeComponentHtml = function () {
        var childrenComponentsHtmlGroup = this.makeChildrenComponentsHtml();
        var listHtmlDeclaration = this.makeListHtmlDeclaration();
        var listHtmlBody = this.makeListHtmlBody(childrenComponentsHtmlGroup);
        var listHtmlCloseBracket = '</ul></div>';
        return listHtmlDeclaration + listHtmlBody + listHtmlCloseBracket;
    };
    ListComposite.prototype.makeListHtmlDeclaration = function () {
        var listCssClass = this.componentParams.cssClass === '' ? this.defaultCssClass : this.componentParams.cssClass;
        return "<div><ul type=\"".concat(this.componentParams.type, "\" class=\"").concat(listCssClass, "\" style=\"").concat(this.componentParams.getStyles(), "\">");
    };
    ListComposite.prototype.makeListHtmlBody = function (childrenComponentsHtmlGroup) {
        var listItemCssClass = this.componentParams.listItemCssClass === '' ? this.defaultListItemCssClass : this.componentParams.listItemCssClass;
        var listHtmlBody = '';
        childrenComponentsHtmlGroup.forEach(function (childHtml) {
            var listItemHtml = "<li class=\"".concat(listItemCssClass, "\">").concat(childHtml, "</li>");
            listHtmlBody += listItemHtml;
        });
        return listHtmlBody;
    };
    return ListComposite;
}(CompositeComponent));
export { ListComposite };
//# sourceMappingURL=ListComposite.js.map