import {Component} from "../AbstractComponents/Component.js";

export interface CompositeComponentFactory {
    buildForm(): Component;
    buildList(): Component;
}