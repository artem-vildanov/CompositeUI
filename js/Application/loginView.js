import { ComponentBuilder } from "../Framework/ComponentBuilders/ComponentBuilder.js";
var inputEmail = ComponentBuilder
    .makeComponent()
    .setText('youremail@example.com')
    .setFontStyle('italic')
    .buildLeafComponent()
    .buildInputField();
var inputPassword = ComponentBuilder
    .makeComponent()
    .setText('Password')
    .setType('password')
    .buildLeafComponent()
    .buildInputField();
var textArea = ComponentBuilder
    .makeComponent()
    .setText('Login')
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
export var loginForm = ComponentBuilder
    .makeComponent()
    .setWidth('50%')
    .setMargin('20px')
    .setPadding('20px')
    .addChildrenComponents([
    textArea,
    inputEmail,
    inputPassword,
    submitButton
])
    .buildCompositeComponent()
    .buildForm();
export var loginViewHtml = loginForm.renderHtml();
//# sourceMappingURL=loginView.js.map