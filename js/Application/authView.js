import { ComponentBuilder } from "../Framework/AbstractViewComponents/ComponentBuilder.js";
import { signUpForm } from "./signupView.js";
import { loginForm } from "./loginView.js";
export var authForm = ComponentBuilder
    .makeComponent()
    .addChildrenComponents([
    signUpForm,
    loginForm
])
    .buildCompositeComponent()
    .buildForm();
export var authHtmlView = authForm.renderHtml();
//# sourceMappingURL=authView.js.map