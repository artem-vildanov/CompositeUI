import { ComponentsCollection } from "../Collections/ComponentsCollection.js";
import { EventsCollection } from "../Collections/EventsCollection.js";
import { ListenersCollection } from "../Collections/ListenersCollection.js";
var ComponentParams = /** @class */ (function () {
    function ComponentParams() {
        this.color = '';
        this.backgroundColor = '';
        this.backgroundImage = '';
        this.fontSize = '';
        this.fontWeight = '';
        this.fontStyle = '';
        this.width = '';
        this.height = '';
        this.padding = '';
        this.margin = '';
        this.text = '';
        this.type = ''; // only for InputFieldLeaf
        this.cssClass = '';
        this.listItemCssClass = ''; // only for ListComposite
        this.childrenComponents = new ComponentsCollection(new Array); // only for CompositeComponents
        this.clickListeners = new EventsCollection(new Array());
        this.mouseOutListeners = new EventsCollection(new Array());
        this.mouseOverListeners = new EventsCollection(new Array());
        this.updateListeners = new ListenersCollection(new Array());
    }
    ComponentParams.prototype.getStyles = function () {
        return this.color
            + this.backgroundColor
            + this.backgroundImage
            + this.fontSize
            + this.fontWeight
            + this.fontStyle
            + this.width
            + this.height
            + this.padding
            + this.margin;
    };
    return ComponentParams;
}());
export { ComponentParams };
//# sourceMappingURL=ComponentParams.js.map