var Collection = /** @class */ (function () {
    function Collection(collection) {
        this.collection = collection;
    }
    Collection.prototype.add = function (item) {
        this.collection.push(item);
    };
    Collection.prototype.count = function () {
        return this.collection.length;
    };
    return Collection;
}());
export { Collection };
//# sourceMappingURL=Collection.js.map