import { CompositeComponent } from "../AbstractViewComponents/CompositeComponent.js";
import {ComponentParams} from "../AbstractViewComponents/ComponentParams.js";

export class FormComposite extends CompositeComponent
{
    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeCompositeHtml();
    }

    protected makeCompositeHtml(): string {
        const childrenComponentsHtmlGroup: Array<string> = this.makeChildrenComponentsHtml();
        const childrenHtml: string = childrenComponentsHtmlGroup.join("");

        const formHtmlDeclaration = this.makeFormHtmlDeclaration();
        const formHtmlBody = this.makeFormHtmlBody(childrenHtml)
        const formHtmlCloseBracket = `</div>`

        return formHtmlDeclaration + formHtmlBody + formHtmlCloseBracket
    }

    private makeFormHtmlDeclaration(): string {
        return `<div class="${this.componentParams.css}" style="${this.componentParams.getStyles()}">`
    }

    private makeFormHtmlBody(childrenHtml: string): string {
        let formText: string = '';
        if (this.componentParams.text !== '') {
            formText = `<h1>${this.componentParams.text}</h1>`
        }

        return formText + childrenHtml
    }
}