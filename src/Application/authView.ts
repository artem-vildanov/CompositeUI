import {ComponentBuilder} from "../Framework/AbstractViewComponents/ComponentBuilder.js";
import {signUpForm} from "./signupView.js";
import {loginForm} from "./loginView.js";

const bothFormsContainer = ComponentBuilder
    .makeComponent()
    .setCss('d-flex flex-row justify-content-center align-items-center')
    .addChildrenComponents([
        signUpForm,
        ComponentBuilder
            .makeComponent()
            .setText('or')
            .setColor('white')
            .setFontSize('30px')
            .buildLeafComponent()
            .buildTextArea(),
        loginForm
    ])
    .buildCompositeComponent()
    .buildForm()

export const authForm = ComponentBuilder
    .makeComponent()
    .setText('Authorize')
    .setColor('white')
    .setCss('d-flex flex-column justify-content-center align-items-center rounded')
    .setBackgroundImage()
    .setPadding('30px')
    .addChildrenComponents([
        bothFormsContainer,
    ])
    .buildCompositeComponent()
    .buildForm()

export const authHtmlView = authForm.renderHtml()