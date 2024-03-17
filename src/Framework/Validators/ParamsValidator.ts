import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import {CssValidator} from "./CssValidator.js";

export class ParamsValidator {
    private cssValidator: CssValidator;

    constructor(
        private componentParams: ComponentParams
    ) {
        this.cssValidator = new CssValidator(componentParams)
    }

    public validateForm() {
        this.cssValidator.validateCssParams()
        this.checkTypeParamDoesntPresent()
        this.checkListItemCssDoesntPresent()
    }

    public validateList() {
        this.cssValidator.validateCssParams()
    }

    public validateButton() {
        this.cssValidator.validateCssParams()
        this.checkListItemCssDoesntPresent()
        this.checkChildrenDontPresents()
    }

    public validateInputField() {
        this.cssValidator.validateCssParams()
        this.checkListItemCssDoesntPresent()
        this.checkChildrenDontPresents()
    }

    public validateTextArea() {
        this.cssValidator.validateCssParams()
        this.checkListItemCssDoesntPresent()
        this.checkTypeParamDoesntPresent()
        this.checkChildrenDontPresents()
    }

    private checkTypeParamDoesntPresent(): void {
        if (this.componentParams.type !== '') {
            throw Error('type parameter allowed only for inputFieldLeaf component')
        }
    }

    private checkListItemCssDoesntPresent(): void {
        if (this.componentParams.listItemCssClass !== '') {
            throw Error('listItemCss allowed only for ListComposite component')
        }
    }

    private checkChildrenDontPresents(): void {
        if (this.componentParams.childrenComponents.length !== 0) {
            throw Error('LeafComponent unable to have children components')
        }
    }
}