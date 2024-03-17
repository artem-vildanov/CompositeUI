import { LeafComponent } from "../AbstractComponents/LeafComponent.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";

export class ButtonLeaf extends LeafComponent
{
    defaultCssClass = 'btn btn-dark'

    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeLeafHtml();
    }

    protected makeLeafHtml(): string {
        const buttonCssClass = this.componentParams.cssClass === '' ? this.defaultCssClass : this.componentParams.cssClass
        return `<button type="${this.componentParams.type}" class="${buttonCssClass}" style="${this.componentParams.getStyles()}">${this.componentParams.text}</button>`;
    }
}