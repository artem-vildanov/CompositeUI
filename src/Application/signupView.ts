import {ComponentBuilder} from "../Framework/AbstractViewComponents/ComponentBuilder.js";

const inputEmail = ComponentBuilder
    .makeComponent()
    .setText('youremail@example.com')
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
    .setFontSize('60px')
    .buildLeafComponent()
    .buildTextArea()

export const signUpForm = ComponentBuilder
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

export const signUpViewHtml = signUpForm.renderHtml()