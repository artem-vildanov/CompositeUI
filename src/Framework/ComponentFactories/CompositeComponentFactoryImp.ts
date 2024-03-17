import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import {Component} from "../AbstractComponents/Component.js";
import {CompositeComponentFactory} from "./CompositeComponentFactory.js";
import {FormComposite} from "../CompositeComponents/FormComposite.js";
import {ListComposite} from "../CompositeComponents/ListComposite.js";

export class CompositeComponentFactoryImp implements CompositeComponentFactory{

    constructor(
        protected readonly componentParams: ComponentParams
    ) {}

    buildForm(): Component {
        return new FormComposite(this.componentParams)
    }

    buildList(): Component {
        return new ListComposite(this.componentParams)
    }
}