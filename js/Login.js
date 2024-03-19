"use strict";
import { LoginView } from "./Application/LoginView.js";

const loginView = new LoginView()
window.button = loginView.submitButton
window.form = loginView.loginForm
window.componentsCollection = loginView.loginForm.componentsCollection
loginView.displayHtml()
