import { LeafComponent } from "../AbstractViewComponents/LeafComponent.js";

export class ButtonLeaf extends LeafComponent
{
    constructor(text: string, cssClass: string = 'btn btn-primary m-1') {
        super(text, cssClass);
        this.html = this.makeLeafHtml();
    }

    makeLeafHtml(): string {
        return `<button class=\"${this.cssClass}\">${this.text}</button>`;
    }
}