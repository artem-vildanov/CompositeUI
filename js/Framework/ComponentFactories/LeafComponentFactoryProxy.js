import { ParamsValidator } from "../Validators/ParamsValidator.js";
import { LeafComponentFactoryImp } from "./LeafComponentFactoryImp.js";
var LeafComponentFactoryProxy = /** @class */ (function () {
    function LeafComponentFactoryProxy(componentParams) {
        this.componentParams = componentParams;
        this.paramsValidator = new ParamsValidator(componentParams);
    }
    LeafComponentFactoryProxy.prototype.buildButton = function () {
        this.paramsValidator.validateButton();
        return new LeafComponentFactoryImp(this.componentParams).buildButton();
    };
    LeafComponentFactoryProxy.prototype.buildInputField = function () {
        this.paramsValidator.validateInputField();
        return new LeafComponentFactoryImp(this.componentParams).buildInputField();
    };
    LeafComponentFactoryProxy.prototype.buildTextArea = function () {
        this.paramsValidator.validateTextArea();
        return new LeafComponentFactoryImp(this.componentParams).buildTextArea();
    };
    return LeafComponentFactoryProxy;
}());
export { LeafComponentFactoryProxy };
//# sourceMappingURL=LeafComponentFactoryProxy.js.map