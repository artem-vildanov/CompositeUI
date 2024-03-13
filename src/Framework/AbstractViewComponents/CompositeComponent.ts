import { ComponentImp } from "./ComponentImp.js";

export abstract class CompositeComponent extends ComponentImp
{
    childrenComponents: Array<ComponentImp> = new Array<ComponentImp>();

    protected constructor(text: string, cssClass: string) {
        super(text, cssClass);
    }

    protected abstract makeCompositeHtml(): string;

    // Массив html кодов дочерних компонентов
    protected makeChildrenComponentsHtml(): Array<string> {
        let childrenComponentsHtmlGroup: Array<string> = new Array<string>();
        this.childrenComponents.forEach((ComponentImp: ComponentImp) => {
            childrenComponentsHtmlGroup.push(ComponentImp.renderHtml())
        })
        return childrenComponentsHtmlGroup;
    }

    addChildrenComponents(componentsGroup: Array<ComponentImp>): void {
        componentsGroup.forEach((childComponent: ComponentImp) => {
            this.childrenComponents.push(childComponent);
        })

        this.html = this.makeCompositeHtml();
    }

    // removeComponent(ComponentImp: ComponentImp): void {
    //
    // }
}