import {Component} from "./Component.js";
import {ButtonLeafProxy} from "../LeafViewComponents/ButtonLeafProxy.js";
import {TextAreaLeafProxy} from "../LeafViewComponents/TextAreaLeafProxy.js";
import {InputFieldLeafProxy} from "../LeafViewComponents/InputFieldLeafProxy.js";
import {ComponentParams} from "./ComponentParams.js";

export class LeafComponentFactory {
    componentParams: ComponentParams;

    constructor(componentParams: ComponentParams) {
        this.componentParams = componentParams
    }

    buildButton(): Component {
        return new ButtonLeafProxy(this.componentParams)
    }

    buildTextArea(): Component {
        return new TextAreaLeafProxy(this.componentParams)
    }

    buildInputField(): Component {
        return new InputFieldLeafProxy(this.componentParams)
    }
}