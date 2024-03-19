var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Collection } from "./Collection.js";
import { Iterator } from "./Iterator.js";
var ComponentsCollection = /** @class */ (function (_super) {
    __extends(ComponentsCollection, _super);
    function ComponentsCollection(collection) {
        var _this = _super.call(this, collection) || this;
        _this.childrenIterator = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(collection) {
                var _this = _super.call(this, collection) || this;
                _this.iteratorPosition = 0;
                return _this;
            }
            return class_1;
        }(Iterator));
        return _this;
    }
    ComponentsCollection.prototype.getIterator = function () {
        return new this.childrenIterator(this.collection);
    };
    ComponentsCollection.prototype.addComponentsCollection = function (inputCollection) {
        var _a;
        (_a = this.collection).push.apply(_a, inputCollection.collection);
    };
    ComponentsCollection.prototype.find = function (elementId) {
        return this.collection.filter(function (component) { return component.componentId === elementId; })[0];
    };
    ComponentsCollection.prototype.getCompleteComponentsCollection = function () {
        var completeCollection = new ComponentsCollection(new Array);
        this.collection.forEach(function (component) {
            completeCollection.add(component);
            var childrenComponents = component.getComponentParams().childrenComponents;
            if (childrenComponents.count() !== 0) {
                childrenComponents = childrenComponents.getCompleteComponentsCollection();
                completeCollection.addComponentsCollection(childrenComponents);
            }
        });
        return completeCollection;
    };
    return ComponentsCollection;
}(Collection));
export { ComponentsCollection };
//# sourceMappingURL=ComponentsCollection.js.map