import {ComponentProxy} from "../AbstractViewComponents/ComponentProxy.js";
import {ComponentParams} from "../AbstractViewComponents/ComponentParams.js";
import {ListComposite} from "./ListComposite.js";

export class ListCompositeProxy extends ComponentProxy {
    constructor(componentParams: ComponentParams) {
        super(componentParams);
    }

    listValidation(): void {
        this.validateComponentParams()
        if (!this.componentParams.css) {
            this.componentParams.css = 'list-group list-group-flush p-2'
        }
        if (!this.componentParams.listItemCss) {
            this.componentParams.listItemCss = 'list-group-item'
        }
    }

    renderHtml(): string {
        this.listValidation()
        return new ListComposite(this.componentParams).renderHtml()
    }
}