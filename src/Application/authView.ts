import {ComponentBuilder} from "../Framework/AbstractViewComponents/ComponentBuilder.js";
import {signUpForm} from "./signupView.js";
import {loginForm} from "./loginView.js";

export const authForm = ComponentBuilder
    .makeComponent()
    .addChildrenComponents([
        signUpForm,
        loginForm
    ])
    .buildCompositeComponent()
    .buildForm()

export const authHtmlView = authForm.renderHtml()