import {Component} from "../AbstractComponents/Component.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import {ButtonLeaf} from "../LeafComponents/ButtonLeaf.js";
import {TextAreaLeaf} from "../LeafComponents/TextAreaLeaf.js";
import {InputFieldLeaf} from "../LeafComponents/InputFieldLeaf.js";

export class LeafComponentFactoryImp {
    constructor(
        protected readonly componentParams: ComponentParams
    ) {}

    buildButton(): Component {
        return new ButtonLeaf(this.componentParams)
    }

    buildTextArea(): Component {
        return new TextAreaLeaf(this.componentParams)
    }

    buildInputField(): Component {
        return new InputFieldLeaf(this.componentParams)
    }
}