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
var ListComposite = /** @class */ (function (_super) {
    __extends(ListComposite, _super);
    function ListComposite(componentParams) {
        var _this = _super.call(this, componentParams) || this;
        _this.html = _this.makeCompositeHtml();
        return _this;
    }
    ListComposite.prototype.makeCompositeHtml = function () {
        var _this = this;
        var childrenComponentsHtmlGroup = this.makeChildrenComponentsHtml();
        var listHtml = "<div><ul class=\"".concat(this.componentParams.cssClass, "\">");
        childrenComponentsHtmlGroup.forEach(function (childHtml) {
            var listItemHtml = "<li class=\"".concat(_this.componentParams.listItemCssClass, "\">").concat(childHtml, "</li>");
            listHtml += listItemHtml;
        });
        listHtml += '</ul></div>';
        return listHtml;
    };
    return ListComposite;
}(CompositeComponent));
export { ListComposite };
//# sourceMappingURL=ListComposite.js.map