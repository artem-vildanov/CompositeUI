import { LeafComponent } from "../AbstractViewComponents/LeafComponent.js";
import {ComponentParams} from "../AbstractViewComponents/ComponentParams";

export class InputFieldLeaf extends LeafComponent
{
    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeLeafHtml();
    }

    protected makeLeafHtml(): string {
        return `<input type="text" class="${this.componentParams.css}" placeholder="${this.componentParams.text}" style="${this.componentParams.getStyles()}">`;
    }
}