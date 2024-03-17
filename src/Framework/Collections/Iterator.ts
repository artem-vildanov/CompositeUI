import { Collection } from "./Collection"

export abstract class Iterator<T> {
    protected constructor(protected collection: Array<T>) {}

    protected abstract iteratorPosition: number

    hasNext(): boolean {
        return this.iteratorPosition < this.collection.length
    }

    next(): T {
        if (this.hasNext()) {
            const collectionItem: T = this.collection[this.iteratorPosition]
            this.iteratorPosition++
            return collectionItem
        } else {
            throw Error('collection out of range')
        }
    }
}