import {ViewComponent} from "../../Framework/ViewComponent.js";
import {FormComposite} from "../../Framework/Composites/FormComposite.js";
import {TextAreaLeaf} from "../../Framework/Leafs/TextAreaLeaf.js";
import {ButtonLeaf} from "../../Framework/Leafs/ButtonLeaf.js";
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

