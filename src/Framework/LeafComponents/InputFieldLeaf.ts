import { LeafComponent } from "../AbstractComponents/LeafComponent.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams";

export class InputFieldLeaf extends LeafComponent
{
    defaultCssClass = 'form-control m-1'
    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeLeafHtml();
    }

    protected makeLeafHtml(): string {
        const inputFieldCssClass = this.componentParams.cssClass === '' ? this.defaultCssClass : this.componentParams.cssClass
        return `<input type="${this.componentParams.type}" class="${inputFieldCssClass}" placeholder="${this.componentParams.text}" style="${this.componentParams.getStyles()}">`;
    }
}