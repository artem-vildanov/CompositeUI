import {ViewComponent} from "../../Framework/ViewComponent.js";
import {FormComposite} from "../../Framework/Composites/FormComposite.js";
import {ButtonLeaf} from "../../Framework/Leafs/ButtonLeaf.js";
import { LoginCredentialsComponent } from "./LoginCredentialsComponent.js";


export class LoginComponent extends ViewComponent{
    constructor() {
        super(
            new FormComposite("Log In"),
            [
                new LoginCredentialsComponent().getComponent(),
                new ButtonLeaf('Login', 'btn btn-dark m-1'),
            ])
    }
}