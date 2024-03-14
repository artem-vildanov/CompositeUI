import { ComponentBuilder } from "../Framework/AbstractViewComponents/ComponentBuilder.js";
var inputEmail = ComponentBuilder
    .makeComponent()
    .setText('youremail@example.com')
    .buildLeafComponent()
    .buildInputField();
var inputPassword = ComponentBuilder
    .makeComponent()
    .setText('Password')
    .buildLeafComponent()
    .buildInputField();
var textArea = ComponentBuilder
    .makeComponent()
    .setText('Enter credentials')
    .setFontWeight('bold')
    .setFontSize('60px')
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
    inputPassword
])
    .buildCompositeComponent()
    .buildForm();
export var signUpViewHtml = signUpForm.renderHtml();
//# sourceMappingURL=signupView.js.map