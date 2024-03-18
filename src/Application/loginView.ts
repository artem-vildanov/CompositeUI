import {ComponentBuilder} from "../Framework/ComponentBuilders/ComponentBuilder.js";
import {Component} from "../Framework/AbstractComponents/Component.js";
import {EventListener} from "../Framework/Events/EventListener.js";


export class LoginView implements EventListener {

    inputEmail: Component;
    inputPassword: Component;
    textArea: Component;
    submitButton: Component;
    loginForm: Component;

    constructor() {
        this.inputEmail = ComponentBuilder
            .makeComponent()
            .setText('youremail@example.com')
            .setFontStyle('italic')
            .buildLeafComponent()
            .buildInputField()

        this.inputPassword = ComponentBuilder
            .makeComponent()
            .setText('Password')
            .setType('password')
            .buildLeafComponent()
            .buildInputField()

        this.textArea = ComponentBuilder
            .makeComponent()
            .setText('Login')
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

        this.submitButton.attachClickListener(this.textArea, function(this: any) {
            this.componentParams.fontSize = "font-size: 100px; "
            this.componentParams.margin = "margin: 30px; "
        }.bind(this.textArea))

        this.loginForm = ComponentBuilder
            .makeComponent()
            .setWidth('50%')
            .setMargin('20px')
            .setPadding('20px')
            .addChildrenComponents([
                this.textArea,
                this.inputEmail,
                this.inputPassword,
                this.submitButton
            ])
            .buildCompositeComponent()
            .buildForm()

        this.loginForm.attachUpdateListener(this)
    }

    clickHappened(actionCallback: () => void): void {

    }

    mouseOutHappened(actionCallback: () => void): void {
    }

    mouseOverHappened(actionCallback: () => void): void {
    }

    updateHappened(): void {
        this.displayHtml()
    }

    displayHtml(): void {
        const entryPoint = document.getElementById('entryPoint')
        if (entryPoint) {
            entryPoint.innerHTML = this.loginForm.getHtml()
        }  
    }
}
//export const loginForm = new LoginView().loginForm