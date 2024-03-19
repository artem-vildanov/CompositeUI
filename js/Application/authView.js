import { ComponentBuilder } from "../Framework/ComponentBuilders/ComponentBuilder.js";
import { LoginView } from "./LoginView.js";
import { SignupView } from "./SignupView.js";
var loginForm = new LoginView().loginForm;
var AuthView = /** @class */ (function () {
    function AuthView() {
        this.signUpForm = new SignupView().signUpForm;
        this.loginForm = new LoginView().loginForm;
        this.bothFormsContainer = ComponentBuilder
            .makeComponent()
            .setCssClass('d-flex flex-row justify-content-center align-items-center')
            .addChildrenComponents([
            this.signUpForm,
            ComponentBuilder
                .makeComponent()
                .setText('or')
                .setColor('white')
                .setFontSize('30px')
                .buildLeafComponent()
                .buildTextArea(),
            this.loginForm
        ])
            .buildCompositeComponent()
            .buildForm();
        this.authForm = ComponentBuilder
            .makeComponent()
            .setText('Authorize')
            .setColor('white')
            .setCssClass('d-flex flex-column justify-content-center align-items-center rounded')
            .setBackgroundImage()
            .setPadding('30px')
            .addChildrenComponents([
            this.bothFormsContainer,
        ])
            .buildCompositeComponent()
            .buildForm();
        this.authForm.attachUpdateListener(this);
    }
    AuthView.prototype.clickHappened = function (actionCallback) { };
    AuthView.prototype.mouseOutHappened = function (actionCallback) { };
    AuthView.prototype.mouseOverHappened = function (actionCallback) { };
    AuthView.prototype.updateHappened = function () {
        this.displayHtml();
    };
    AuthView.prototype.displayHtml = function () {
        var entryPoint = document.getElementById('entryPoint');
        if (entryPoint) {
            entryPoint.innerHTML = this.authForm.getHtml();
        }
    };
    return AuthView;
}());
export { AuthView };
//# sourceMappingURL=AuthView.js.map