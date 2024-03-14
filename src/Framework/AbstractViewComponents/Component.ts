import {ComponentParams} from "./ComponentParams.js";


export abstract class Component {
    protected html: string | null = null;
    protected componentParams: ComponentParams;
    protected constructor(componentParams: ComponentParams) {
        this.componentParams = componentParams
    }

    renderHtml(): string {
        if (!this.html) {
            throw Error("failed to render html")
        }

        return this.html;
    }
}
