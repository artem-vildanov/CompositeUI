"use strict";
import { LoginView } from "./Application/loginView.js";

const loginView = new LoginView()
window.button = loginView.submitButton
window.form = loginView.loginForm
loginView.displayHtml()
