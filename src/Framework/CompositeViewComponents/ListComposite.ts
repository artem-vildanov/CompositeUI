import { CompositeComponent } from "../AbstractViewComponents/CompositeComponent.js";
import {ComponentParams} from "../AbstractViewComponents/ComponentParams.js";

export class ListComposite extends CompositeComponent
{
    constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.html = this.makeCompositeHtml();
    }

    protected makeCompositeHtml(): string {
        const childrenComponentsHtmlGroup: Array<string> = this.makeChildrenComponentsHtml();

        let listHtml: string = `<div><ul class="${this.componentParams.css}">`;

        childrenComponentsHtmlGroup.forEach((childHtml: string) => {
            const listItemHtml: string = `<li class="${this.componentParams.listItemCss}">${childHtml}</li>`;
            listHtml += listItemHtml;
        })

        listHtml += '</ul></div>';

        return listHtml
    }
}