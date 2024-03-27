import { CompositeComponent } from "../AbstractComponents/CompositeComponent.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";

export class ListComposite extends CompositeComponent
{
    defaultCssClass = 'list-group list-group-flush p-2'
    private defaultListItemCssClass: string = 'list-group-item'

    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeComponentHtml();
    }

    protected makeComponentHtml(): string {
        const childrenComponentsHtmlGroup: Array<string> = this.makeChildrenComponentsHtml();

        const listHtmlDeclaration = this.makeListHtmlDeclaration()
        const listHtmlBody = this.makeListHtmlBody(childrenComponentsHtmlGroup)
        const listHtmlCloseBracket = '</ul></div>'

        return listHtmlDeclaration + listHtmlBody + listHtmlCloseBracket
    }

    private makeListHtmlDeclaration(): string {
        const listCssClass = this.componentParams.cssClass === '' ? this.defaultCssClass : this.componentParams.cssClass
        return `<div><ul type="${this.componentParams.type}" class="${listCssClass}" style="${this.componentParams.getStyles()}">`
    }

    private makeListHtmlBody(childrenComponentsHtmlGroup: Array<string>): string {
        const listItemCssClass = this.componentParams.listItemCssClass === '' ? this.defaultListItemCssClass : this.componentParams.listItemCssClass
        let listHtmlBody = ''
        childrenComponentsHtmlGroup.forEach((childHtml: string) => {
            const listItemHtml: string = `<li class="${listItemCssClass}">${childHtml}</li>`;
            listHtmlBody += listItemHtml;
        })

        return listHtmlBody
    }
}