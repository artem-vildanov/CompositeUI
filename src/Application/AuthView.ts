import {ComponentBuilder} from "../Framework/ComponentBuilders/ComponentBuilder.js";
import {Component} from "../Framework/AbstractComponents/Component.js";
import {EventListener} from "../Framework/Events/EventListener.js";
import { LoginView } from "./LoginView.js";
import { SignupView } from "./SignupView.js";

const loginForm = new LoginView().loginForm;

export class AuthView implements EventListener {

    signUpForm: Component = new SignupView().signUpForm
    loginForm: Component = new LoginView().loginForm;
    bothFormsContainer: Component;
    authForm: Component;
    

    constructor() {
        this.bothFormsContainer = ComponentBuilder
            .makeComponent()
            .setCssClass('d-flex flex-row justify-content-center align-items-center')
            .addChildrenComponents([
                this.signUpForm,
                ComponentBuilder
                    .makeComponent()
                    .setText('or')
                    .setColor('white')
                    .setFontSize('30px')
                    .buildLeafComponent()
                    .buildTextArea(),
                this.loginForm
            ])
            .buildCompositeComponent()
            .buildForm()

        this.authForm = ComponentBuilder
            .makeComponent()
            .setText('Authorize')
            .setColor('white')
            .setCssClass('d-flex flex-column justify-content-center align-items-center rounded')
            .setBackgroundImage()
            .setPadding('30px')
            .addChildrenComponents([
                this.bothFormsContainer,
            ])
            .buildCompositeComponent()
            .buildForm()

        this.authForm.attachUpdateListener(this)
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
            entryPoint.innerHTML = this.authForm.getHtml()
        }  
    }
}