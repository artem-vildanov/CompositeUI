import { LeafComponent } from "../AbstractViewComponents/LeafComponent.js";

export class InputFieldLeaf extends LeafComponent
{
    constructor(text: string, cssClass: string = 'form-control m-1') {
        super(text, cssClass);
        this.html = this.makeLeafHtml();
    }

    makeLeafHtml(): string {
        return `<input type="text" class=\"${this.cssClass}\" placeholder=\"${this.text}\">`;
    }
}