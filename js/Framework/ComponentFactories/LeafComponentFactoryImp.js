import { ButtonLeaf } from "../LeafComponents/ButtonLeaf.js";
import { TextAreaLeaf } from "../LeafComponents/TextAreaLeaf.js";
import { InputFieldLeaf } from "../LeafComponents/InputFieldLeaf.js";
var LeafComponentFactoryImp = /** @class */ (function () {
    function LeafComponentFactoryImp(componentParams) {
        this.componentParams = componentParams;
    }
    LeafComponentFactoryImp.prototype.buildButton = function () {
        return new ButtonLeaf(this.componentParams);
    };
    LeafComponentFactoryImp.prototype.buildTextArea = function () {
        return new TextAreaLeaf(this.componentParams);
    };
    LeafComponentFactoryImp.prototype.buildInputField = function () {
        return new InputFieldLeaf(this.componentParams);
    };
    return LeafComponentFactoryImp;
}());
export { LeafComponentFactoryImp };
//# sourceMappingURL=LeafComponentFactoryImp.js.map