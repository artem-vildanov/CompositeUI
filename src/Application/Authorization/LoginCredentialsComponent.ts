import {ViewComponent} from "../../Framework/ViewComponent.js";
import {ListComposite} from "../../Framework/CompositeViewComponents/ListComposite.js";
import {InputFieldLeaf} from "../../Framework/LeafViewComponents/InputFieldLeaf.js";


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