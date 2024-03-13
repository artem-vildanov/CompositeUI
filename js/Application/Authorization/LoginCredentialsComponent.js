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
import { ViewComponent } from "../../Framework/ViewComponent.js";
import { ListComposite } from "../../Framework/Composites/ListComposite.js";
import { InputFieldLeaf } from "../../Framework/Leafs/InputFieldLeaf.js";
var LoginCredentialsComponent = /** @class */ (function (_super) {
    __extends(LoginCredentialsComponent, _super);
    function LoginCredentialsComponent() {
        return _super.call(this, new ListComposite(), [
            new InputFieldLeaf('Email'),
            new InputFieldLeaf('Password'),
        ]) || this;
    }
    return LoginCredentialsComponent;
}(ViewComponent));
export { LoginCredentialsComponent };
//# sourceMappingURL=LoginCredentialsComponent.js.map