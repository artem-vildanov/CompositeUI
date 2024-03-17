import {LeafComponentFactory} from "./LeafComponentFactory.js";
import {Component} from "../AbstractComponents/Component.js";
import {ParamsValidator} from "../Validators/ParamsValidator.js";
import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import {LeafComponentFactoryImp} from "./LeafComponentFactoryImp.js";

export class LeafComponentFactoryProxy implements LeafComponentFactory {

    private paramsValidator: ParamsValidator;
    constructor(
        protected readonly componentParams: ComponentParams
    ) {
        this.paramsValidator = new ParamsValidator(componentParams)
    }

    buildButton(): Component {
        this.paramsValidator.validateButton()
        return new LeafComponentFactoryImp(this.componentParams).buildButton()
    }

    buildInputField(): Component {
        this.paramsValidator.validateInputField()
        return new LeafComponentFactoryImp(this.componentParams).buildInputField()
    }

    buildTextArea(): Component {
        this.paramsValidator.validateTextArea()
        return new LeafComponentFactoryImp(this.componentParams).buildTextArea()
    }
}