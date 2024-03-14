import { Component } from "./Component.js";
import {ComponentParams} from "./ComponentParams.js";

export abstract class LeafComponent extends Component{
    protected constructor(componentParams: ComponentParams) {
        super(componentParams);
    }

    protected abstract makeLeafHtml(): string;
}