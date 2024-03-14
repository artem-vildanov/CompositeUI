import {ComponentProxy} from "../AbstractViewComponents/ComponentProxy.js";
import {ComponentParams} from "../AbstractViewComponents/ComponentParams.js";
import {InputFieldLeaf} from "./InputFieldLeaf.js";

export class InputFieldLeafProxy extends ComponentProxy {
    constructor(componentParams: ComponentParams) {
        super(componentParams);
    }

    inputFieldValidation(): void {
        this.validateComponentParams()
        if (this.componentParams.css === '') {
            this.componentParams.css = 'form-control m-1'
        }
    }

    renderHtml(): string {
        this.inputFieldValidation()
        return new InputFieldLeaf(this.componentParams).renderHtml()
    }
}