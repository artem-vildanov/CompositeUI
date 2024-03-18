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
var ChildrenComponentsCollection = /** @class */ (function (_super) {
    __extends(ChildrenComponentsCollection, _super);
    function ChildrenComponentsCollection(collection) {
        var _this = _super.call(this, collection) || this;
        _this.listenersIterator = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(collection) {
                var _this = _super.call(this, collection) || this;
                _this.iteratorPosition = 0;
                return _this;
            }
            class_1.prototype.find = function (elementId) {
            };
            return class_1;
        }(Iterator));
        return _this;
    }
    ChildrenComponentsCollection.prototype.getIterator = function () {
        return new this.listenersIterator(this.collection);
    };
    return ChildrenComponentsCollection;
}(Collection));
export { ChildrenComponentsCollection };
//# sourceMappingURL=ChildrenComponentsCollection.js.map