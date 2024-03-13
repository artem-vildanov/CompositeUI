import { CompositeComponent } from "../AbstractViewComponents/CompositeComponent.js";

export class ListComposite extends CompositeComponent
{
    private readonly listItemCssClass: string;

    constructor(
        listCssClass: string = 'list-group list-group-flush p-2',
        listItemCssClass: string = 'list-group-item'
    ) {
        super('', listCssClass);
        this.listItemCssClass = listItemCssClass;

        this.html = this.makeCompositeHtml();
    }

    protected makeCompositeHtml(): string {
        const childrenComponentsHtmlGroup: Array<string> = this.makeChildrenComponentsHtml();

        let listHtml: string = `<div><ul class="${this.cssClass}">`;

        childrenComponentsHtmlGroup.forEach((childHtml: string) => {
            const listItemHtml: string = `<li class="${this.listItemCssClass}">${childHtml}</li>`;
            listHtml += listItemHtml;
        })

        listHtml += '</ul></div>';

        return listHtml
    }
}