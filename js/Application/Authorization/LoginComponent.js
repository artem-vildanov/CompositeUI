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
import { FormComposite } from "../../Framework/Composites/FormComposite.js";
import { ButtonLeaf } from "../../Framework/Leafs/ButtonLeaf.js";
import { LoginCredentialsComponent } from "./LoginCredentialsComponent.js";
var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent() {
        return _super.call(this, new FormComposite("Log In"), [
            new LoginCredentialsComponent().getComponent(),
            new ButtonLeaf('Login', 'btn btn-dark m-1'),
        ]) || this;
    }
    return LoginComponent;
}(ViewComponent));
export { LoginComponent };
//# sourceMappingURL=LoginComponent.js.map