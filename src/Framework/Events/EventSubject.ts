export interface EventProducer {
    eventListeners: Array<{
        eventListener: EventListener,
        event: () => void,
    }>;

    attachClickListener(listener: EventListener, event: () => any): void;
    detachClickListener(listener: EventListener): void;

    clickNotify(): void;
    mouseOverNotify(): void;
    mouseOutNotify(): void;
}