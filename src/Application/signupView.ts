import {ComponentBuilder} from "../Framework/AbstractViewComponents/ComponentBuilder.js";

const inputEmail = ComponentBuilder
    .makeComponent()
    .setText('youremail@example.com')
    .buildLeafComponent()
    .buildInputField()

const inputName = ComponentBuilder
    .makeComponent()
    .setText('Your name')
    .buildLeafComponent()
    .buildInputField()

const inputPassword = ComponentBuilder
    .makeComponent()
    .setText('Password')
    .buildLeafComponent()
    .buildInputField()

const repeatPassword = ComponentBuilder
    .makeComponent()
    .setText('Repeat password')
    .buildLeafComponent()
    .buildInputField()

const textArea = ComponentBuilder
    .makeComponent()
    .setText('Sign Up')
    .setFontWeight('bold')
    .setFontSize('20px')
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
        inputName,
        inputPassword,
        repeatPassword
    ])
    .buildCompositeComponent()
    .buildForm()

export const signUpViewHtml = signUpForm.renderHtml()