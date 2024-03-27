import { Component } from "./Component.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";

export abstract class LeafComponent extends Component{
    protected constructor(componentParams: ComponentParams) {
        super(componentParams);
    }
}