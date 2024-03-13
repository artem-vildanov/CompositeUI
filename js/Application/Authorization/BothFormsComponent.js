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
import { LoginComponent } from "./LoginComponent.js";
import { SignupComponent } from "./SignupComponent.js";
import { ViewComponent } from "../../Framework/ViewComponent.js";
import { FormComposite } from "../../Framework/Composites/FormComposite.js";
import { TextAreaLeaf } from "../../Framework/Leafs/TextAreaLeaf.js";
var BothFormsComponent = /** @class */ (function (_super) {
    __extends(BothFormsComponent, _super);
    function BothFormsComponent() {
        return _super.call(this, new FormComposite('', 'd-flex flex-row justify-content-evenly align-items-center'), [
            new LoginComponent().getComponent(),
            new TextAreaLeaf('or', 'fs-4 fw-bold mx-4 text-white'),
            new SignupComponent().getComponent()
        ]) || this;
    }
    return BothFormsComponent;
}(ViewComponent));
export { BothFormsComponent };
//# sourceMappingURL=BothFormsComponent.js.map