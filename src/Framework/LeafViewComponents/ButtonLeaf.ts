import { LeafComponent } from "../AbstractViewComponents/LeafComponent.js";
import {ComponentParams} from "../AbstractViewComponents/ComponentParams.js";

export class ButtonLeaf extends LeafComponent
{
    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeLeafHtml();
    }

    protected makeLeafHtml(): string {
        return `<button class="${this.componentParams.css}" style="${this.componentParams.getStyles()}">${this.componentParams.text}</button>`;
    }
}