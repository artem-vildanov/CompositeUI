import { ButtonLeafProxy } from "../LeafViewComponents/ButtonLeafProxy.js";
import { TextAreaLeafProxy } from "../LeafViewComponents/TextAreaLeafProxy.js";
import { InputFieldLeafProxy } from "../LeafViewComponents/InputFieldLeafProxy.js";
import { FormCompositeProxy } from "../CompositeViewComponents/FormCompositeProxy.js";
import { ListCompositeProxy } from "../CompositeViewComponents/ListCompositeProxy.js";
var ComponentFactory = /** @class */ (function () {
    function ComponentFactory(componentParams) {
        this.componentParams = componentParams;
    }
    ComponentFactory.prototype.buildButton = function () {
        return new ButtonLeafProxy(this.componentParams);
    };
    ComponentFactory.prototype.buildTextArea = function () {
        return new TextAreaLeafProxy(this.componentParams);
    };
    ComponentFactory.prototype.buildInputField = function () {
        return new InputFieldLeafProxy(this.componentParams);
    };
    ComponentFactory.prototype.buildForm = function () {
        return new FormCompositeProxy(this.componentParams);
    };
    ComponentFactory.prototype.buildList = function () {
        return new ListCompositeProxy(this.componentParams);
    };
    return ComponentFactory;
}());
export { ComponentFactory };
//# sourceMappingURL=ComponentFactory.js.map