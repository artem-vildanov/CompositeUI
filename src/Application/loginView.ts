import {ComponentBuilder} from "../Framework/ComponentBuilders/ComponentBuilder.js";

const inputEmail = ComponentBuilder
    .makeComponent()
    .setText('youremail@example.com')
    .setFontStyle('italic')
    .buildLeafComponent()
    .buildInputField()

const inputPassword = ComponentBuilder
    .makeComponent()
    .setText('Password')
    .setType('password')
    .buildLeafComponent()
    .buildInputField()

const textArea = ComponentBuilder
    .makeComponent()
    .setText('Login')
    .setFontWeight('bold')
    .setFontSize('20px')
    .buildLeafComponent()
    .buildTextArea()

const submitButton = ComponentBuilder
    .makeComponent()
    .setText('Submit')
    .setMargin('10px')
    .buildLeafComponent()
    .buildButton()

export const loginForm = ComponentBuilder
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
    .buildForm()

export const loginViewHtml = loginForm.renderHtml()