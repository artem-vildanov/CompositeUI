import { FormComposite } from "../Framework/Composites/FormComposite.js";
import { TextAreaLeaf } from "../Framework/Leafs/TextAreaLeaf.js";
import { formsContainerComponent } from "./FormsContainerView.js";
import { ImageBoxComposite } from "../Framework/Composites/ImageBoxComposite.js";
var textAboveForms = new TextAreaLeaf('Authorize', 'fs-1 fw-bold mb-5 text-white');
var authorizationComponent = new FormComposite('', 'd-flex flex-column justify-content-center align-items-center');
var childrenComponents = [
    textAboveForms,
    formsContainerComponent
];
authorizationComponent.addChildrenComponents(childrenComponents);
var containerWithBackground = new ImageBoxComposite();
childrenComponents = [
    authorizationComponent
];
containerWithBackground.addChildrenComponents(childrenComponents);
export var authorizationView = containerWithBackground.renderHtml();
//# sourceMappingURL=AuthorizationView.js.map