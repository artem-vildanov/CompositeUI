export interface EventListener {
    mouseOverHappened(actionCallback: () => void): void
    mouseOutHappened(actionCallback: () => void): void
    clickHappened(actionCallback: () => void): void
    updateHappened(): void
}

