import { Component } from "./Component.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";

export abstract class LeafComponent extends Component{
    protected constructor(componentParams: ComponentParams) {
        super(componentParams);
    }

    protected abstract makeLeafHtml(): string;

    // EventListener implementation

    clickHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeLeafHtml();
        this.updateNotify()
    }

    mouseOutHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeLeafHtml();
        this.updateNotify()
    }

    mouseOverHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeLeafHtml();
        this.updateNotify()
    }

    updateHappened(): void {
        this.html = this.makeLeafHtml()
    }
}