import { BothFormsComponent } from "./BothFormsComponent.js";
import {ViewComponent} from "../../Framework/ViewComponent.js";
import {ImageBoxComposite} from "../../Framework/CompositeViewComponents/ImageBoxComposite.js";
import {TextAreaLeaf} from "../../Framework/LeafViewComponents/TextAreaLeaf.js";

export class AuthorizationComponent extends ViewComponent{
    constructor() {
        super(
            new ImageBoxComposite(),
            [
                new TextAreaLeaf('Authorize', 'fs-1 fw-bold mb-5 text-white'),
                new BothFormsComponent().getComponent()
            ]
        );
    }
}