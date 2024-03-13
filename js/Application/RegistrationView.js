import { FormComposite } from "../Framework/Composites/FormComposite.js";
import { ButtonLeaf } from "../Framework/Leafs/ButtonLeaf.js";
import { TextAreaLeaf } from "../Framework/Leafs/TextAreaLeaf.js";
import { InputFieldLeaf } from "../Framework/Leafs/InputFieldLeaf.js";
import { ListComposite } from "../Framework/Composites/ListComposite.js";
var credentialsInputComponent = new ListComposite();
var credentialsInputElements = [
    new InputFieldLeaf('Your name'),
    new InputFieldLeaf('Your email'),
    new InputFieldLeaf('Password'),
];
credentialsInputComponent.addChildrenComponents(credentialsInputElements);
var registrationFormComponent = new FormComposite('Registration');
var registrationFormElements = [
    new TextAreaLeaf('Create new account'),
    credentialsInputComponent,
    new ButtonLeaf('Register', 'btn btn-dark m-1'),
];
registrationFormComponent.addChildrenComponents(registrationFormElements);
export var registrationComponent = registrationFormComponent;
export var registrationView = registrationFormComponent.renderHtml();
//# sourceMappingURL=RegistrationView.js.map