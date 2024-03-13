import {ViewComponent} from "../../Framework/ViewComponent.js";
import {ListComposite} from "../../Framework/Composites/ListComposite.js";
import {InputFieldLeaf} from "../../Framework/Leafs/InputFieldLeaf.js";


export class SignupCredentialsComponent extends ViewComponent{
    constructor() {
        super(
            new ListComposite(),
            [
                new InputFieldLeaf('Your name'),
                new InputFieldLeaf('Your email'),
                new InputFieldLeaf('Password'),
            ])
    }
}