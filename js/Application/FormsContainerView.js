import { loginComponent } from "./LoginView.js";
import { registrationComponent } from "./RegistrationView.js";
import { FormComposite } from "../Framework/Composites/FormComposite.js";
import { TextAreaLeaf } from "../Framework/Leafs/TextAreaLeaf.js";
var textBetweenForms = new TextAreaLeaf('or', 'fs-4 fw-bold mx-4 text-white');
export var formsContainerComponent = new FormComposite('', 'd-flex flex-row justify-content-evenly align-items-center');
var childrenComponents = [
    loginComponent,
    textBetweenForms,
    registrationComponent
];
formsContainerComponent.addChildrenComponents(childrenComponents);
//# sourceMappingURL=FormsContainerView.js.map