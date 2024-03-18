import { Component } from "./Component.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import { ComponentsCollection } from "../Collections/ComponentsCollection.js";

export abstract class CompositeComponent extends Component
{
    childrenComponents: ComponentsCollection
    protected constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.childrenComponents = componentParams.childrenComponents
    }

    protected abstract makeCompositeHtml(): string;

    // Массив html кодов дочерних компонентов
    protected makeChildrenComponentsHtml(): Array<string> {
        let childrenHtml: Array<string> = new Array<string>();
        const childrenIterator = this.childrenComponents.getIterator()
        while(childrenIterator.hasNext()) {
            const childComponent = childrenIterator.next()
            const componentHtml = childComponent.getHtml()
            childrenHtml.push(componentHtml)
        }

        return childrenHtml
    }

    clickHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeCompositeHtml();
        this.updateNotify()
    }

    mouseOutHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeCompositeHtml();
        this.updateNotify()
    }

    mouseOverHappened(actionCallback: () => void): void {
        actionCallback.bind(this)
        actionCallback()
        this.html = this.makeCompositeHtml();
        this.updateNotify()
    }

    updateHappened(): void {
        this.html = this.makeCompositeHtml()
        this.updateNotify()
    }
}