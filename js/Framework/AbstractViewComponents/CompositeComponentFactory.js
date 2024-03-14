import { FormCompositeProxy } from "../CompositeViewComponents/FormCompositeProxy.js";
import { ListCompositeProxy } from "../CompositeViewComponents/ListCompositeProxy.js";
var CompositeComponentFactory = /** @class */ (function () {
    function CompositeComponentFactory(componentParams) {
        this.componentParams = componentParams;
    }
    CompositeComponentFactory.prototype.buildForm = function () {
        return new FormCompositeProxy(this.componentParams);
    };
    CompositeComponentFactory.prototype.buildList = function () {
        return new ListCompositeProxy(this.componentParams);
    };
    return CompositeComponentFactory;
}());
export { CompositeComponentFactory };
//# sourceMappingURL=CompositeComponentFactory.js.map