import {ViewComponent} from "../../Framework/ViewComponent.js";
import {FormComposite} from "../../Framework/CompositeViewComponents/FormComposite.js";
import {TextAreaLeaf} from "../../Framework/LeafViewComponents/TextAreaLeaf.js";
import {ButtonLeaf} from "../../Framework/LeafViewComponents/ButtonLeaf.js";
import { SignupCredentialsComponent } from "./SignupCredentialsComponent.js";


export class SignupComponent extends ViewComponent{
    constructor() {
        super(
            new FormComposite("Sign Up"),
            [
                new TextAreaLeaf('Create new account'),
                new SignupCredentialsComponent().getComponent(),
                new ButtonLeaf('Register', 'btn btn-dark m-1'),
            ])
    }
}

