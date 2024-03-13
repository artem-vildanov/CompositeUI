import {Component} from "./Component";
import {CompositeComponent} from "./CompositeComponent";


export abstract class ViewComponent {
    private readonly viewComponent: CompositeComponent;
    private readonly html: string;

    protected constructor(viewComponent: CompositeComponent, childrenComponents: Array<Component>) {
        this.viewComponent = viewComponent;
        this.viewComponent.addChildrenComponents(childrenComponents);
        this.html = this.viewComponent.renderHtml();
    }

    getComponent(): CompositeComponent {
        return this.viewComponent;
    }

    renderView(): string {
        return this.html;
    }
}