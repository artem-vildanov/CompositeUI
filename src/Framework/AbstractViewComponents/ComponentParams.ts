import {Component} from "./Component.js";

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
    css: string = '';
    listItemCss: string = '';
    childrenComponents: Array<Component> = new Array<Component>();

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