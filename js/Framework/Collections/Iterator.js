var Iterator = /** @class */ (function () {
    function Iterator(collection) {
        this.collection = collection;
    }
    Iterator.prototype.hasNext = function () {
        return this.iteratorPosition < this.collection.length;
    };
    Iterator.prototype.next = function () {
        if (this.hasNext()) {
            var collectionItem = this.collection[this.iteratorPosition];
            this.iteratorPosition++;
            return collectionItem;
        }
        else {
            throw Error('collection out of range');
        }
    };
    return Iterator;
}());
export { Iterator };
//# sourceMappingURL=Iterator.js.map