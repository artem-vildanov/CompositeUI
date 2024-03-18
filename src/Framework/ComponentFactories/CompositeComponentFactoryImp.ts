import {ComponentParams} from "../ComponentBuilders/ComponentParams.js";
import {Component} from "../AbstractComponents/Component.js";
import {CompositeComponentFactory} from "./CompositeComponentFactory.js";
import {FormComposite} from "../CompositeComponents/FormComposite.js";
import {ListComposite} from "../CompositeComponents/ListComposite.js";

export class CompositeComponentFactoryImp implements CompositeComponentFactory{

    constructor(
        protected readonly componentParams: ComponentParams
    ) {}

    buildForm(): Component {
        const form = new FormComposite(this.componentParams)

        const componentsIterator = form.childrenComponents.getIterator()
        while(componentsIterator.hasNext()) {
            const component = componentsIterator.next()
            component.attachUpdateListener(form)
        }

        return form
    }

    buildList(): Component {
        const list = new ListComposite(this.componentParams)

        const componentsIterator = list.childrenComponents.getIterator()
        while(componentsIterator.hasNext()) {
            const component = componentsIterator.next()
            component.attachUpdateListener(list)
        }

        return list
    }
}

