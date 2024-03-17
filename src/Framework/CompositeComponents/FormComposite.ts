import { CompositeComponent } from "../AbstractComponents/CompositeComponent.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";

export class FormComposite extends CompositeComponent
{
    defaultCssClass = 'card d-flex flex-column justify-content-center align-items-center'

    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeCompositeHtml();
    }

    protected makeCompositeHtml(): string {
        const childrenComponentsHtmlGroup: Array<string> = this.makeChildrenComponentsHtml();

        const formHtmlDeclaration = this.makeFormHtmlDeclaration();
        const formHtmlBody = this.makeFormHtmlBody(childrenComponentsHtmlGroup)
        const formHtmlCloseBracket = `</div>`

        return formHtmlDeclaration + formHtmlBody + formHtmlCloseBracket
    }

    private makeFormHtmlDeclaration(): string {
        const formCssClass = this.componentParams.cssClass === '' ? this.defaultCssClass : this.componentParams.cssClass
        return `<div class="${formCssClass}" style="${this.componentParams.getStyles()}">`
    }

    private makeFormHtmlBody(childrenComponentsHtmlGroup: Array<string>): string {
        let formText: string = '';
        if (this.componentParams.text !== '') {
            formText = `<h1>${this.componentParams.text}</h1>`
        }

        const childrenHtml: string = childrenComponentsHtmlGroup.join("");

        return formText + childrenHtml
    }
}