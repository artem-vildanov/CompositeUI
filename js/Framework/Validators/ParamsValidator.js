import { CssValidator } from "./CssValidator.js";
var ParamsValidator = /** @class */ (function () {
    function ParamsValidator(componentParams) {
        this.componentParams = componentParams;
        this.cssValidator = new CssValidator(componentParams);
    }
    ParamsValidator.prototype.validateForm = function () {
        this.cssValidator.validateCssParams();
        this.checkTypeParamDoesntPresent();
        this.checkListItemCssDoesntPresent();
    };
    ParamsValidator.prototype.validateList = function () {
        this.cssValidator.validateCssParams();
    };
    ParamsValidator.prototype.validateButton = function () {
        this.cssValidator.validateCssParams();
        this.checkListItemCssDoesntPresent();
        this.checkChildrenDontPresents();
    };
    ParamsValidator.prototype.validateInputField = function () {
        this.cssValidator.validateCssParams();
        this.checkListItemCssDoesntPresent();
        this.checkChildrenDontPresents();
    };
    ParamsValidator.prototype.validateTextArea = function () {
        this.cssValidator.validateCssParams();
        this.checkListItemCssDoesntPresent();
        this.checkTypeParamDoesntPresent();
        this.checkChildrenDontPresents();
    };
    ParamsValidator.prototype.checkTypeParamDoesntPresent = function () {
        if (this.componentParams.type !== '') {
            throw Error('type parameter allowed only for inputFieldLeaf component');
        }
    };
    ParamsValidator.prototype.checkListItemCssDoesntPresent = function () {
        if (this.componentParams.listItemCssClass !== '') {
            throw Error('listItemCss allowed only for ListComposite component');
        }
    };
    ParamsValidator.prototype.checkChildrenDontPresents = function () {
        if (this.componentParams.childrenComponents.count() !== 0) {
            throw Error('LeafComponent unable to have children components');
        }
    };
    return ParamsValidator;
}());
export { ParamsValidator };
//# sourceMappingURL=ParamsValidator.js.map