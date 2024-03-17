import { Iterator } from "./Iterator"

export abstract class Collection<T> {

    protected constructor(
        protected collection: Array<T>
    ) {}

    add(item: T): void {
        this.collection.push(item)
    }

    count(): number {
        return this.collection.length
    }

    abstract getIterator(): Iterator<T>
} 