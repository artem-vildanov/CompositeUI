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
import { ListComposite } from "./ListComposite.js";
var ListCompositeProxy = /** @class */ (function (_super) {
    __extends(ListCompositeProxy, _super);
    function ListCompositeProxy(componentParams) {
        return _super.call(this, componentParams) || this;
    }
    ListCompositeProxy.prototype.listValidation = function () {
        this.validateComponentParams();
        if (!this.componentParams.cssClass) {
            this.componentParams.cssClass = 'list-group list-group-flush p-2';
        }
        if (!this.componentParams.listItemCssClass) {
            this.componentParams.listItemCssClass = 'list-group-item';
        }
    };
    ListCompositeProxy.prototype.getHtml = function () {
        this.listValidation();
        return new ListComposite(this.componentParams).getHtml();
    };
    return ListCompositeProxy;
}(ComponentProxy));
export { ListCompositeProxy };
//# sourceMappingURL=ListCompositeProxy.js.map