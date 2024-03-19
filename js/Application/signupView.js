import { ComponentBuilder } from "../Framework/ComponentBuilders/ComponentBuilder.js";
var SignupView = /** @class */ (function () {
    function SignupView() {
        this.inputEmail = ComponentBuilder
            .makeComponent()
            .setText('youremail@example.com')
            .buildLeafComponent()
            .buildInputField();
        this.inputName = ComponentBuilder
            .makeComponent()
            .setText('Your name')
            .buildLeafComponent()
            .buildInputField();
        this.inputPassword = ComponentBuilder
            .makeComponent()
            .setText('Password')
            .setType('password')
            .buildLeafComponent()
            .buildInputField();
        this.repeatPassword = ComponentBuilder
            .makeComponent()
            .setText('Repeat password')
            .setType('password')
            .buildLeafComponent()
            .buildInputField();
        this.inputFieldsList = ComponentBuilder
            .makeComponent()
            .addChildrenComponents([
            this.inputEmail,
            this.inputName,
            this.inputPassword,
            this.repeatPassword
        ])
            .buildCompositeComponent()
            .buildList();
        this.textArea = ComponentBuilder
            .makeComponent()
            .setText('Sign Up')
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
        this.signUpForm = ComponentBuilder
            .makeComponent()
            .setWidth('50%')
            .setMargin('20px')
            .setPadding('20px')
            .addChildrenComponents([
            this.textArea,
            this.inputFieldsList,
            this.submitButton
        ])
            .buildCompositeComponent()
            .buildForm();
        // this.submitButton.attachMouseOverListener(this.signUpForm, function (this: any) {
        //     this.componentParams.backgroundColor = 'background-color: gray; '
        // }.bind(this.signUpForm))
        // this.submitButton.attachMouseOutListener(this.signUpForm, function (this: any) {
        //     this.componentParams.backgroundColor = 'background-color: white; '
        // }.bind(this.signUpForm))
        // this.signUpForm.attachUpdateListener(this)
    }
    SignupView.prototype.clickHappened = function (actionCallback) { };
    SignupView.prototype.mouseOutHappened = function (actionCallback) { };
    SignupView.prototype.mouseOverHappened = function (actionCallback) { };
    SignupView.prototype.updateHappened = function () {
        this.displayHtml();
    };
    SignupView.prototype.displayHtml = function () {
        var entryPoint = document.getElementById('entryPoint');
        if (entryPoint) {
            entryPoint.innerHTML = this.signUpForm.getHtml();
        }
    };
    return SignupView;
}());
export { SignupView };
//# sourceMappingURL=SignupView.js.map