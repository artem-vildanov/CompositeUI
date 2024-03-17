import { ButtonLeafProxy } from "../LeafViewComponents/ButtonLeafProxy.js";
import { TextAreaLeafProxy } from "../LeafViewComponents/TextAreaLeafProxy.js";
import { InputFieldLeafProxy } from "../LeafViewComponents/InputFieldLeafProxy.js";
var LeafComponentFactory = /** @class */ (function () {
    function LeafComponentFactory(componentParams) {
        this.componentParams = componentParams;
    }
    LeafComponentFactory.prototype.buildButton = function () {
        return new ButtonLeafProxy(this.componentParams);
    };
    LeafComponentFactory.prototype.buildTextArea = function () {
        return new TextAreaLeafProxy(this.componentParams);
    };
    LeafComponentFactory.prototype.buildInputField = function () {
        return new InputFieldLeafProxy(this.componentParams);
    };
    return LeafComponentFactory;
}());
export { LeafComponentFactory };
//# sourceMappingURL=LeafComponentFactoryImp.js.map