import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import {Component} from "../AbstractComponents/Component.js";
import {CompositeComponentFactory} from "./CompositeComponentFactory.js";
import {CompositeComponentFactoryImp} from "./CompositeComponentFactoryImp.js";
import {ParamsValidator} from "../Validators/ParamsValidator.js";

export class CompositeComponentFactoryProxy implements CompositeComponentFactory {

    private paramsValidator: ParamsValidator;

    constructor(
        protected readonly componentParams: ComponentParams
    ) {
        this.paramsValidator = new ParamsValidator(componentParams)
    }

    buildForm(): Component {
        this.paramsValidator.validateForm()
        return new CompositeComponentFactoryImp(this.componentParams).buildForm()
    }

    buildList(): Component {
        this.paramsValidator.validateList()
        return new CompositeComponentFactoryImp(this.componentParams).buildList()
    }
}