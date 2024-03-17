import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";


export abstract class Component {
    protected html: string = '';
    protected abstract defaultCssClass: string;
    protected constructor(protected componentParams: ComponentParams) {}

    getComponentParams(): ComponentParams {
        return this.componentParams
    }

    getHtml(): string {
        return this.html;
    }
}
