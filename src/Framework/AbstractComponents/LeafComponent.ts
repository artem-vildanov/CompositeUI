import { Component } from "./Component.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";

export abstract class LeafComponent extends Component{
    protected constructor(componentParams: ComponentParams) {
        super(componentParams);
    }

    protected abstract makeLeafHtml(): string;

    // EventListener implementation

    protected clickHappened(actionCallback: () => void): void {
        actionCallback()
        this.html = this.makeLeafHtml();
        this.updateNotify()
    }

    protected mouseOutHappened(actionCallback: () => void): void {
        actionCallback()
        this.html = this.makeLeafHtml();
    }

    protected mouseOverHappened(actionCallback: () => void): void {
        actionCallback()
        this.html = this.makeLeafHtml();
    }

    protected updateHappened(): void {
        this.html = this.makeLeafHtml()
    }
}