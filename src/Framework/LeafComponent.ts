import { Component } from "./Component.js";

export abstract class LeafComponent extends Component{
    protected constructor(text: string, cssClass: string) {
        super(text, cssClass);
    }

    abstract makeLeafHtml(): string;
}