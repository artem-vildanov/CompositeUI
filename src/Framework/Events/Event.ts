export class Event {
    constructor(
        public eventListener: EventListener,
        public event: () => void
    ) {}
}