import {ComponentBuilder} from "../Framework/ComponentBuilders/ComponentBuilder.js";
import {Component} from "../Framework/AbstractComponents/Component.js";
import {EventListener} from "../Framework/Events/EventListener.js";


export class SignupView implements EventListener {

    inputEmail: Component;
    inputName: Component
    inputPassword: Component;
    repeatPassword: Component;
    inputFieldsList: Component;
    textArea: Component;
    submitButton: Component;
    signUpForm: Component;

    constructor() {
        this.inputEmail = ComponentBuilder
            .makeComponent()
            .setText('youremail@example.com')
            .buildLeafComponent()
            .buildInputField()
    
        this.inputName = ComponentBuilder
            .makeComponent()
            .setText('Your name')
            .buildLeafComponent()
            .buildInputField()
    
        this.inputPassword = ComponentBuilder
            .makeComponent()
            .setText('Password')
            .setType('password')
            .buildLeafComponent()
            .buildInputField()
    
        this.repeatPassword = ComponentBuilder
            .makeComponent()
            .setText('Repeat password')
            .setType('password')
            .buildLeafComponent()
            .buildInputField()
    
        this.inputFieldsList = ComponentBuilder
            .makeComponent()
            .addChildrenComponents([
                this.inputEmail,
                this.inputName,
                this.inputPassword,
                this.repeatPassword
            ])
            .buildCompositeComponent()
            .buildList()
        
        this.textArea = ComponentBuilder
            .makeComponent()
            .setText('Sign Up')
            .setFontWeight('bold')
            .setFontSize('20px')
            .buildLeafComponent()
            .buildTextArea()
    
        this.submitButton = ComponentBuilder
            .makeComponent()
            .setText('Submit')
            .setMargin('10px')
            .buildLeafComponent()
            .buildButton()
    
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
            .buildForm()

        // this.submitButton.attachMouseOverListener(this.signUpForm, function (this: any) {
        //     this.componentParams.backgroundColor = 'background-color: gray; '
        // }.bind(this.signUpForm))

        // this.submitButton.attachMouseOutListener(this.signUpForm, function (this: any) {
        //     this.componentParams.backgroundColor = 'background-color: white; '
        // }.bind(this.signUpForm))

        // this.signUpForm.attachUpdateListener(this)
    }

    clickHappened(actionCallback: () => void): void {}

    mouseOutHappened(actionCallback: () => void): void {}

    mouseOverHappened(actionCallback: () => void): void {}

    updateHappened(): void {
        this.displayHtml()
    }

    displayHtml(): void {
        const entryPoint = document.getElementById('entryPoint')
        if (entryPoint) {
            entryPoint.innerHTML = this.signUpForm.getHtml()
        }  
    }
}