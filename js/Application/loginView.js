import { ComponentBuilder } from "../Framework/ComponentBuilders/ComponentBuilder.js";
var LoginView = /** @class */ (function () {
    function LoginView() {
        this.inputEmail = ComponentBuilder
            .makeComponent()
            .setText('youremail@example.com')
            .setFontStyle('italic')
            .buildLeafComponent()
            .buildInputField();
        this.inputPassword = ComponentBuilder
            .makeComponent()
            .setText('Password')
            .setType('password')
            .buildLeafComponent()
            .buildInputField();
        this.textArea = ComponentBuilder
            .makeComponent()
            .setText('Login')
            .setFontWeight('bold')
            .setFontSize('20px')
            .buildLeafComponent()
            .buildTextArea();
        this.submitButton = ComponentBuilder
            .makeComponent()
            .setText('Submit')
            .setMargin('10px')
            .buildLeafComponent()
            .buildButton();
        this.submitButton.attachClickListener(this.textArea, function () {
            this.componentParams.fontSize = "font-size: 100px; ";
            this.componentParams.margin = "margin: 30px; ";
        }.bind(this.textArea));
        this.loginForm = ComponentBuilder
            .makeComponent()
            .setWidth('50%')
            .setMargin('20px')
            .setPadding('20px')
            .addChildrenComponents([
            this.textArea,
            this.inputEmail,
            this.inputPassword,
            this.submitButton
        ])
            .buildCompositeComponent()
            .buildForm();
        this.loginForm.attachUpdateListener(this);
    }
    LoginView.prototype.clickHappened = function (actionCallback) {
    };
    LoginView.prototype.mouseOutHappened = function (actionCallback) {
    };
    LoginView.prototype.mouseOverHappened = function (actionCallback) {
    };
    LoginView.prototype.updateHappened = function () {
        this.displayHtml();
    };
    LoginView.prototype.displayHtml = function () {
        var entryPoint = document.getElementById('entryPoint');
        if (entryPoint) {
            entryPoint.innerHTML = this.loginForm.getHtml();
        }
    };
    return LoginView;
}());
export { LoginView };
//export const loginForm = new LoginView().loginForm
//# sourceMappingURL=LoginView.js.map