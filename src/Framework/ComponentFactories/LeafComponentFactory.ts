import {Component} from "../AbstractComponents/Component.js";

export interface LeafComponentFactory {
    buildButton(): Component;
    buildTextArea(): Component;
    buildInputField(): Component;
}