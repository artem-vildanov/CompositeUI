import { Iterator } from "./Iterator.js"

export abstract class Collection<T> {

    protected constructor(
        protected collection: Array<T>
    ) {}

    add(item: T): void {
        this.collection.push(item)
    }

    // addMultiple(items: T[]): void {
    //     this.collection.push(...items)
    // }

    count(): number {
        return this.collection.length
    }

    abstract getIterator(): Iterator<T>
} 