/**
 * паттерн прокси применяется в программе таким образом: 
 * строитель формирует параметры создаваемого компонента
 * фабрика должна создать на основе этих параметров экземпляр выбранного компонента
 * перед созданием необходимо провести валидацию параметров
 * если проводить валидацию непосредственно в классе фабрики то нарушается 
 * принцип единственной ответственности.
 * поэтому валидация проводится в прокси-классе фабрики, и только после 
 * валидации параметров создается объект компоненты.
 * 
 * ниже пример без использования паттерна прокси - 
 * в фабрике происходит:
 * и создание экземпляра,
 * и валидация параметров -> нарушение solid
 */

/**
 * фабрика которая создает экземпляры компонентов 
 * из сформированных параметров компонентов (componentParams: ComponentParams)
 */
class ComponentFactory {
    protected validator: Validator
    constructor(protected componentParams) {
        this.validator = new Validator(componentParams)
    }

    buildFormComponent(): FormComponent {
        this.validator.validate()
        return new FormComponent(this.componentParams)
    } 

    buildButtonComponent(): ButtonComponent {
        this.validator.validate()
        return new ButtonComponent(this.componentParams)
    }
}

/**
 * классы компонентов
 */
class FormComponent {
    constructor(protected componentParams) {}
} 
class ButtonComponent {
    constructor(protected componentParams) {}
}
// ... и другие

/**
 * класс который занимается валидацией 
 * параметров компонентов перед созданием 
 * экземпляра компоненты
 */
class Validator { 
    constructor(protected componentParams) {}
    validate() {}
}