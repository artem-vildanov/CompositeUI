import { ComponentImp } from "./ComponentImp.js";

export abstract class LeafComponent extends ComponentImp{
    protected constructor(text: string, cssClass: string) {
        super(text, cssClass);
    }

    abstract makeLeafHtml(): string;
}