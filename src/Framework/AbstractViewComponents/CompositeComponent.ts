import { Component } from "./Component.js";
import {ComponentParams} from "./ComponentParams.js";

export abstract class CompositeComponent extends Component
{
    childrenComponents: Array<Component>;
    protected constructor(componentParams: ComponentParams) {
        super(componentParams);
        this.childrenComponents = componentParams.childrenComponents
    }

    protected abstract makeCompositeHtml(): string;

    // Массив html кодов дочерних компонентов
    protected makeChildrenComponentsHtml(): Array<string> {
        let childrenComponentsHtmlGroup: Array<string> = new Array<string>();
        this.childrenComponents.forEach((ComponentImp: Component) => {
            childrenComponentsHtmlGroup.push(ComponentImp.renderHtml())
        })
        return childrenComponentsHtmlGroup;
    }

    // addChildrenComponents(componentsGroup: Array<Component>): void {
    //     componentsGroup.forEach((childComponent: Component) => {
    //         this.componentParams.childrenComponents.push(childComponent);
    //     })
    //
    //     this.html = this.makeCompositeHtml();
    // }

    // removeComponent(ComponentImp: ComponentImp): void {
    //
    // }
}