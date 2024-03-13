import { AuthorizationComponent } from "./Application/Authorization/AuthorizationComponent.js";
import { LoginComponent } from "./Application/Authorization/LoginComponent.js";
import { SignupComponent } from "./Application/Authorization/SignupComponent.js";

const entryPoint = document.getElementById('entryPoint');

export function renderRegistrationView() {
    if (entryPoint) {
        entryPoint.innerHTML = new SignupComponent().renderView();
    }
}

export function renderLoginView() {
    if (entryPoint) {
        entryPoint.innerHTML = new LoginComponent().renderView();
    }
}

export function renderAuthorizationView() {
    if (entryPoint) {
        entryPoint.innerHTML = new AuthorizationComponent().renderView();
    }
}







