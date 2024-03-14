import {ComponentParams} from "./ComponentParams.js";
import {Component} from "./Component.js";
import {FormCompositeProxy} from "../CompositeViewComponents/FormCompositeProxy.js";
import {ListCompositeProxy} from "../CompositeViewComponents/ListCompositeProxy.js";

export class CompositeComponentFactory {
    componentParams: ComponentParams;

    constructor(componentParams: ComponentParams) {
        this.componentParams = componentParams
    }

    buildForm(): Component {
        return new FormCompositeProxy(this.componentParams)
    }

    buildList(): Component {
        return new ListCompositeProxy(this.componentParams)
    }
}