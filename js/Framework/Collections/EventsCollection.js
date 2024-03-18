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
var EventsCollection = /** @class */ (function (_super) {
    __extends(EventsCollection, _super);
    function EventsCollection(collection) {
        var _this = _super.call(this, collection) || this;
        _this.eventIterator = /** @class */ (function (_super) {
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
    EventsCollection.prototype.getIterator = function () {
        return new this.eventIterator(this.collection);
    };
    return EventsCollection;
}(Collection));
export { EventsCollection };
//# sourceMappingURL=EventsCollection.js.map