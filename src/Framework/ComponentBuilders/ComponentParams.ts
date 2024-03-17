import {Component} from "../AbstractComponents/Component.js";

export class ComponentParams {
    color: string = '';
    backgroundColor: string = '';
    backgroundImage: string = '';
    fontSize: string = '';
    fontWeight: string = '';
    fontStyle: string = '';
    width: string = '';
    height: string = '';
    padding: string = '';
    margin: string = '';
    text: string = '';
    type: string = ''; // only for InputFieldLeaf
    cssClass: string = '';
    listItemCssClass: string = ''; // only for ListComposite
    childrenComponents: Array<Component> = new Array<Component>(); // only for CompositeComponents

    // observers
    eventObservers

    getStyles(): string {
        return this.color
            + this.backgroundColor
            + this.backgroundImage
            + this.fontSize
            + this.fontWeight
            + this.fontStyle
            + this.width
            + this.height
            + this.padding
            + this.margin
    }
}