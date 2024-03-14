import {ComponentProxy} from "../AbstractViewComponents/ComponentProxy.js";
import {ComponentParams} from "../AbstractViewComponents/ComponentParams.js";
import {FormComposite} from "./FormComposite.js";

export class FormCompositeProxy extends ComponentProxy {
    constructor(componentParams: ComponentParams) {
        super(componentParams);
    }

    formValidation() {
        this.validateComponentParams()
        if (this.componentParams.css === '') {
            this.componentParams.css = 'card d-flex flex-column justify-content-center align-items-center'
        }
    }

    renderHtml(): string {
        this.formValidation()
        return new FormComposite(this.componentParams).renderHtml()
    }
}