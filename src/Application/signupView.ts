import {ComponentBuilder} from "../Framework/ComponentBuilders/ComponentBuilder.js";

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
    .setType('password')
    .buildLeafComponent()
    .buildInputField()

const repeatPassword = ComponentBuilder
    .makeComponent()
    .setText('Repeat password')
    .setType('password')
    .buildLeafComponent()
    .buildInputField()

const inputFieldsList = ComponentBuilder
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
    .buildList()

const textArea = ComponentBuilder
    .makeComponent()
    .setText('Sign Up')
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

export const signUpForm = ComponentBuilder
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
    .buildForm()

export const signUpViewHtml = signUpForm.renderHtml()