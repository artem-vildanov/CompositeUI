import { ComponentBuilder } from "../Framework/ComponentBuilders/ComponentBuilder.js";
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
    .setType('password')
    .buildLeafComponent()
    .buildInputField();
var repeatPassword = ComponentBuilder
    .makeComponent()
    .setText('Repeat password')
    .setType('password')
    .buildLeafComponent()
    .buildInputField();
var inputFieldsList = ComponentBuilder
    .makeComponent()
    .addChildrenComponents([
    inputEmail,
    inputName,
    inputPassword,
    repeatPassword
])
    // .setCssClass('none', 'none')
    // .setType('none')
    // .setMargin('0px')
    // .setPadding('0px')
    .buildCompositeComponent()
    .buildList();
var textArea = ComponentBuilder
    .makeComponent()
    .setText('Sign Up')
    .setFontWeight('bold')
    .setFontSize('20px')
    .buildLeafComponent()
    .buildTextArea();
var submitButton = ComponentBuilder
    .makeComponent()
    .setText('Submit')
    .setMargin('10px')
    .buildLeafComponent()
    .buildButton();
export var signUpForm = ComponentBuilder
    .makeComponent()
    .setWidth('50%')
    .setMargin('20px')
    .setPadding('20px')
    .addChildrenComponents([
    textArea,
    inputFieldsList,
    submitButton
])
    .buildCompositeComponent()
    .buildForm();
export var signUpViewHtml = signUpForm.renderHtml();
//# sourceMappingURL=signupView.js.map