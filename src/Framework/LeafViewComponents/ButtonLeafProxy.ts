import {ComponentParams} from "../AbstractViewComponents/ComponentParams.js";
import {ComponentProxy} from "../AbstractViewComponents/ComponentProxy.js";
import {ButtonLeaf} from "./ButtonLeaf.js";

export class ButtonLeafProxy extends ComponentProxy
{
    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.buttonValidation();
    }

    renderHtml(): string {
        return new ButtonLeaf(this.componentParams).renderHtml()
    }

    protected buttonValidation() {
        this.validateComponentParams();
        if (this.componentParams.css === '') {
            this.componentParams.css = 'btn btn-dark'
        }
    }
}