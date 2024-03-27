import { LeafComponent } from "../AbstractComponents/LeafComponent.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";

export class TextAreaLeaf extends LeafComponent
{
    defaultCssClass = 'm-1'

    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeComponentHtml();
    }

    protected makeComponentHtml(): string {
        const textAreaCssClass = this.componentParams.cssClass === '' ? this.defaultCssClass : this.componentParams.cssClass
        return `<div class="${textAreaCssClass}" style="${this.componentParams.getStyles()}">${this.componentParams.text}</div>`;
    }
}