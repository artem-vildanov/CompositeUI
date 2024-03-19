import {Collection} from "./Collection.js";
import {Iterator} from "./Iterator.js";
import {Component} from "../AbstractComponents/Component.js";

export class ComponentsCollection extends Collection<Component> {
    constructor(collection: Array<Component>) {
        super(collection);
    }

    getIterator(): Iterator<Component> {
        return new this.childrenIterator(this.collection);
    }

    addComponentsCollection(inputCollection: ComponentsCollection): void {
        this.collection.push(...inputCollection.collection) 
    }

    find(elementId: string): Component|null {
        return this.collection.filter(component => component.componentId === elementId)[0]
    }

    getCompleteComponentsCollection(): ComponentsCollection {
        const completeCollection = new ComponentsCollection(new Array<Component>)

        this.collection.forEach(component => {

            completeCollection.add(component)

            let childrenComponents = component.getComponentParams().childrenComponents

            if (childrenComponents.count() !== 0) {
                childrenComponents = childrenComponents.getCompleteComponentsCollection()
                completeCollection.addComponentsCollection(childrenComponents)
            }
        })

        return completeCollection
    }

    private childrenIterator = class extends Iterator<Component> {
        protected iteratorPosition: number = 0

        constructor(collection: Array<Component>) {
            super(collection)
        }
    }
}