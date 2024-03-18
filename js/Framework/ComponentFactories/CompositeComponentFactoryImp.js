import { FormComposite } from "../CompositeComponents/FormComposite.js";
import { ListComposite } from "../CompositeComponents/ListComposite.js";
var CompositeComponentFactoryImp = /** @class */ (function () {
    function CompositeComponentFactoryImp(componentParams) {
        this.componentParams = componentParams;
    }
    CompositeComponentFactoryImp.prototype.buildForm = function () {
        var form = new FormComposite(this.componentParams);
        var componentsIterator = form.childrenComponents.getIterator();
        while (componentsIterator.hasNext()) {
            var component = componentsIterator.next();
            component.attachUpdateListener(form);
        }
        return form;
    };
    CompositeComponentFactoryImp.prototype.buildList = function () {
        var list = new ListComposite(this.componentParams);
        var componentsIterator = list.childrenComponents.getIterator();
        while (componentsIterator.hasNext()) {
            var component = componentsIterator.next();
            component.attachUpdateListener(list);
        }
        return list;
    };
    return CompositeComponentFactoryImp;
}());
export { CompositeComponentFactoryImp };
//# sourceMappingURL=CompositeComponentFactoryImp.js.map