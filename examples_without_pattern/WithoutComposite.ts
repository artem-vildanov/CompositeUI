abstract class LeafComponent {
    constructor(protected componentParams) {

    }

    abstract makeHtml(): void;
}

abstract class CompositeComponent {
    childrenLeafComponents: Array<LeafComponent>;
    childrenCompositeComponents: Array<CompositeComponent>;
    constructor (protected componentParams) {

    }

    addLeafComponent(leafComponent: LeafComponent): void {
        this.childrenLeafComponents.push(leafComponent);
    }

    addCompositeComponents(compositeComponent: CompositeComponent): void {
        this.childrenCompositeComponents.push(compositeComponent);
    }

    abstract makeHtml(): void;
}

/**
 * проблема реализации без паттерна в том, что мы не имеем абстракцию для работы одновременно 
 * с Листовыми элементами и Композитными элементами (не имеем базовый компонент как единую абстракцию),
 * в следствии чего усложняется поддержка и расширяемость приложения. Становится сложнее управлять дочерними
 * элементами, теряется универсальность кода. В реализации с паттерном Компоновщик эти проблемы отсутствуют,
 * так как имеется абстракция Component как базовый класс для компонентов, благодаря чему введение нового 
 * функционала и поддержка старого становится проще.
 */
