import {ViewComponent} from "../../Framework/ViewComponent.js";
import {ListComposite} from "../../Framework/Composites/ListComposite.js";
import {InputFieldLeaf} from "../../Framework/Leafs/InputFieldLeaf.js";


export class LoginCredentialsComponent extends ViewComponent{
    constructor() {
        super(
            new ListComposite(),
            [
                new InputFieldLeaf('Email'),
                new InputFieldLeaf('Password'),
            ])
    }
}