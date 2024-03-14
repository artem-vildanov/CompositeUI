import {Component} from "./Component.js";

export abstract class ComponentProxy extends Component {

    protected validateComponentParams() {
        this.validateChildren();
        this.validateBackgroundColor();
        this.validateColor();
        this.validateFontSize();
        this.validateFontStyle();
        this.validateFontWeight();
    }

    private validateChildren(): void {
        const callerClassName: string = this.constructor.prototype.constructor.name;

        // Check if caller class is LeafComponent
        if (callerClassName.indexOf('Leaf') > 0 && this.componentParams.childrenComponents.length !== 0) {
            throw Error(`${callerClassName} cannot have children components, but children components are provided`)
        }
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