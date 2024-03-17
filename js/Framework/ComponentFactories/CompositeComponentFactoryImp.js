import { FormComposite } from "../CompositeComponents/FormComposite.js";
import { ListComposite } from "../CompositeComponents/ListComposite.js";
var CompositeComponentFactoryImp = /** @class */ (function () {
    function CompositeComponentFactoryImp(componentParams) {
        this.componentParams = componentParams;
    }
    CompositeComponentFactoryImp.prototype.buildForm = function () {
        return new FormComposite(this.componentParams);
    };
    CompositeComponentFactoryImp.prototype.buildList = function () {
        return new ListComposite(this.componentParams);
    };
    return CompositeComponentFactoryImp;
}());
export { CompositeComponentFactoryImp };
//# sourceMappingURL=CompositeComponentFactoryImp.js.map