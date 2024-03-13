import { BothFormsComponent } from "./BothFormsComponent.js";
import {ViewComponent} from "../../Framework/ViewComponent.js";
import {ImageBoxComposite} from "../../Framework/Composites/ImageBoxComposite.js";
import {TextAreaLeaf} from "../../Framework/Leafs/TextAreaLeaf.js";

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