export abstract class Component {
    // абстракция компонента

    componentProps: string;

    // массив наблюдателей
    private listeners: Array<any>; // вынуждены использовать тип any - плохая практика

    //producer methods
    addListener(newListener): void {
        this.listeners.push(newListener);
    }

    notifyListeners(): void {
        this.listeners.forEach(listener => {
            listener.actionHappened()
        })
    }
    
    //listener methods
    actionHappened(): void {
        console.log('action happened')
    }
}

/**
 * при игнорировании паттерна возникает проблема сложности работы с подписчиками (слушателями),
 * так как отсутствует единая абстракция для работы с слушателями и поставщиками
 * пример сложности работы с подсписчиками -  
 * не понятно какой тип данных в массиве listeners (приходится использовать any)
 * появляется сложность при добавлении новых типов слушателей и поставщиков.
 
 
 * в моем приложении слушателями (наблюдателями) являются компоненты 
 * и View классы (AuthView, SignupView, LoginView),
 * при реализации паттерна разработчик имеет удобный интерфейс Listener которой имплементируют
 * классы слушатели благодаря чему становится понятно какой тип ожидать в массиве слушателей
 * listeners: Array<Listener>, эта абстракция создает комфортные условия для разработки
 * приложения: поддержка текущего функционала и внедрение нового. 
 */