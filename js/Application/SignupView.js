import { FormComposite } from "../Framework/Composites/FormComposite.js";
import { ButtonLeaf } from "../Framework/Leafs/ButtonLeaf.js";
import { InputFieldLeaf } from "../Framework/Leafs/InputFieldLeaf.js";
import { ListComposite } from "../Framework/Composites/ListComposite.js";
var credentialsInputComponent = new ListComposite('Enter credentials');
var componentsGroup = [
    new InputFieldLeaf('Email'),
    new InputFieldLeaf('Password')
];
credentialsInputComponent.addChildrenComponents(componentsGroup);
var loginFormComponent = new FormComposite('Sign Up');
componentsGroup = [
    credentialsInputComponent,
    new ButtonLeaf('Log In'),
];
loginFormComponent.addChildrenComponents(componentsGroup);
export var loginComponent = loginFormComponent;
export var loginView = loginFormComponent.renderHtml();
//# sourceMappingURL=SignupView.js.map