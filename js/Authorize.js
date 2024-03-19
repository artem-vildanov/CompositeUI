"use strict"

import {AuthView} from './Application/AuthView.js'

const authView = new AuthView()
window.componentsCollection = authView.authForm.childrenComponents.getCompleteComponentsCollection()
window.form = authView.authForm

authView.displayHtml()