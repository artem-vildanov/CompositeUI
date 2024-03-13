import { Component } from "./Component.js";

export abstract class CompositeComponent extends Component
{
    childrenComponents: Array<Component> = new Array<Component>();

    protected constructor(text: string, cssClass: string) {
        super(text, cssClass);
    }

    protected abstract makeCompositeHtml(): string;

    // Массив html кодов дочерних компонентов
    protected makeChildrenComponentsHtml(): Array<string> {
        let childrenComponentsHtmlGroup: Array<string> = new Array<string>();
        this.childrenComponents.forEach((component: Component) => {
            childrenComponentsHtmlGroup.push(component.renderHtml())
        })
        return childrenComponentsHtmlGroup;
    }

    addChildrenComponents(componentsGroup: Array<Component>): void {
        componentsGroup.forEach((childComponent: Component) => {
            this.childrenComponents.push(childComponent);
        })

        this.html = this.makeCompositeHtml();
    }

    // removeComponent(component: Component): void {
    //
    // }
}