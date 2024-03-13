import { LoginComponent } from "./LoginComponent.js";
import { SignupComponent } from "./SignupComponent.js";
import {ViewComponent} from "../../Framework/ViewComponent.js";
import {FormComposite} from "../../Framework/CompositeViewComponents/FormComposite.js";
import {TextAreaLeaf} from "../../Framework/LeafViewComponents/TextAreaLeaf.js";

export class BothFormsComponent extends ViewComponent{
    constructor() {
        super(
            new FormComposite('', 'd-flex flex-row justify-content-evenly align-items-center'),
            [
                new LoginComponent().getComponent(),
                new TextAreaLeaf('or', 'fs-4 fw-bold mx-4 text-white'),
                new SignupComponent().getComponent()
            ]
        )
    }
}