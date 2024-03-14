import {loginViewHtml} from "./Application/loginView.js";
import {signUpViewHtml} from "./Application/signupView.js";
import {authHtmlView} from "./Application/authView.js";

const entryPoint = document.getElementById('entryPoint');

export function renderLoginView() {
    if (entryPoint) {
        entryPoint.innerHTML = loginViewHtml
    }
}

export function renderRegistrationView() {
    if (entryPoint) {
        entryPoint.innerHTML = signUpViewHtml
    }
}

export function renderAuthorizationView() {
    if (entryPoint) {
        entryPoint.innerHTML = authHtmlView
    }
}








