import {ComponentParams} from "../ComponentBuilders/ComponentParams";

export class CssValidator {
    constructor(
        private componentParams: ComponentParams
    ) {}

    public validateCssParams() {
        this.validateBackgroundColor();
        this.validateColor();
        this.validateFontSize();
        this.validateFontStyle();
        this.validateFontWeight();
    }

    private validateColor(): void {

    }

    private validateBackgroundColor(): void {

    }

    private validateFontSize(): void {

    }

    private validateFontStyle(): void {

    }

    private validateFontWeight(): void {

    }
}