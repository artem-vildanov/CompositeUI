import {ComponentParams} from "../AbstractViewComponents/ComponentParams.js";
import {ComponentProxy} from "../AbstractViewComponents/ComponentProxy.js";
import {TextAreaLeaf} from "./TextAreaLeaf.js";

export class TextAreaLeafProxy extends ComponentProxy
{
    constructor(componentParams: ComponentParams) {
        super(componentParams);
    }

    private textAreaValidation(): void {
        this.validateComponentParams()
        if (this.componentParams.css === '') {
            this.componentParams.css = 'm-1'
        }
    }

    renderHtml(): string {
        this.textAreaValidation()
        return new TextAreaLeaf(this.componentParams).renderHtml()
    }
}