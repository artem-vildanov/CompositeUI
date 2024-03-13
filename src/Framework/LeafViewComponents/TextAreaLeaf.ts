import { LeafComponent } from "../AbstractViewComponents/LeafComponent.js";

export class TextAreaLeaf extends LeafComponent
{
    constructor(text: string, cssClass: string = 'm-1') {
        super(text, cssClass);
        this.html = this.makeLeafHtml();
    }

    makeLeafHtml(): string {
        return `<div class=\"${this.cssClass}\">${this.text}</div>`;
    }
}