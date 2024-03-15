import { ComponentBuilder } from "../Framework/AbstractViewComponents/ComponentBuilder.js";
var inputEmail = ComponentBuilder
    .makeComponent()
    .setText('youremail@example.com')
    .buildLeafComponent()
    .buildInputField();
var inputName = ComponentBuilder
    .makeComponent()
    .setText('Your name')
    .buildLeafComponent()
    .buildInputField();
var inputPassword = ComponentBuilder
    .makeComponent()
    .setText('Password')
    .buildLeafComponent()
    .buildInputField();
var repeatPassword = ComponentBuilder
    .makeComponent()
    .setText('Repeat password')
    .buildLeafComponent()
    .buildInputField();
var textArea = ComponentBuilder
    .makeComponent()
    .setText('Sign Up')
    .setFontWeight('bold')
    .setFontSize('20px')
    .buildLeafComponent()
    .buildTextArea();
export var signUpForm = ComponentBuilder
    .makeComponent()
    .setWidth('50%')
    .setMargin('10px')
    .setPadding('20px')
    .addChildrenComponents([
    textArea,
    inputEmail,
    inputName,
    inputPassword,
    repeatPassword
])
    .buildCompositeComponent()
    .buildForm();
export var signUpViewHtml = signUpForm.renderHtml();
//# sourceMappingURL=signupView.js.map