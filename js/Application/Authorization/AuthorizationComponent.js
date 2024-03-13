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
import { BothFormsComponent } from "./BothFormsComponent.js";
import { ViewComponent } from "../../Framework/ViewComponent.js";
import { ImageBoxComposite } from "../../Framework/Composites/ImageBoxComposite.js";
import { TextAreaLeaf } from "../../Framework/Leafs/TextAreaLeaf.js";
var AuthorizationComponent = /** @class */ (function (_super) {
    __extends(AuthorizationComponent, _super);
    function AuthorizationComponent() {
        return _super.call(this, new ImageBoxComposite(), [
            new TextAreaLeaf('Authorize', 'fs-1 fw-bold mb-5 text-white'),
            new BothFormsComponent().getComponent()
        ]) || this;
    }
    return AuthorizationComponent;
}(ViewComponent));
export { AuthorizationComponent };
//# sourceMappingURL=AuthorizationComponent.js.map