import { CompositeComponentFactoryImp } from "./CompositeComponentFactoryImp.js";
import { ParamsValidator } from "../Validators/ParamsValidator.js";
var CompositeComponentFactoryProxy = /** @class */ (function () {
    function CompositeComponentFactoryProxy(componentParams) {
        this.componentParams = componentParams;
        this.paramsValidator = new ParamsValidator(componentParams);
    }
    CompositeComponentFactoryProxy.prototype.buildForm = function () {
        this.paramsValidator.validateForm();
        return new CompositeComponentFactoryImp(this.componentParams).buildForm();
    };
    CompositeComponentFactoryProxy.prototype.buildList = function () {
        this.paramsValidator.validateList();
        return new CompositeComponentFactoryImp(this.componentParams).buildList();
    };
    return CompositeComponentFactoryProxy;
}());
export { CompositeComponentFactoryProxy };
//# sourceMappingURL=CompositeComponentFactoryProxy.js.map