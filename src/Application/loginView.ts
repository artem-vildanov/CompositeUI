import {ComponentBuilder} from "../Framework/AbstractViewComponents/ComponentBuilder.js";

const inputEmail = ComponentBuilder
    .makeComponent()
    .setText('youremail@example.com')
    .setFontStyle('italic')
    .buildLeafComponent()
    .buildInputField()

const inputPassword = ComponentBuilder
    .makeComponent()
    .setText('Password')
    .buildLeafComponent()
    .buildInputField()

const textArea = ComponentBuilder
    .makeComponent()
    .setText('Enter credentials')
    .setFontWeight('bold')
    .setFontSize('30px')
    .buildLeafComponent()
    .buildTextArea()

export const loginForm = ComponentBuilder
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
    .buildForm()

export const loginViewHtml = loginForm.renderHtml()