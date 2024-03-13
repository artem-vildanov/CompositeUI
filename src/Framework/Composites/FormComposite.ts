import { CompositeComponent } from "../CompositeComponent.js";

export class FormComposite extends CompositeComponent
{
    constructor(text: string, cssClass: string = 'card p-4 w-75 d-flex flex-column justify-content-center align-items-center') {
        super(text, cssClass);
        this.html = this.makeCompositeHtml();
    }

    protected makeCompositeHtml(): string {
        const childrenComponentsHtmlGroup: Array<string> = this.makeChildrenComponentsHtml();
        const childrenHtml: string = childrenComponentsHtmlGroup.join("");
        return `<div class=\"${this.cssClass}\">
                    <h3>${this.text}</h3>
                    ${childrenHtml}
                </div>`
    }
}