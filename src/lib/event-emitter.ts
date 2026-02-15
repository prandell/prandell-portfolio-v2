type EventHandler<T = unknown> = (payload: T) => void

export class EventEmitter {
  private readonly listeners = new Map<string, Set<EventHandler>>()

  addListener<T = unknown>(event: string, handler: EventHandler<T>): this {
    const set = this.listeners.get(event) ?? new Set<EventHandler>()
    set.add(handler as EventHandler)
    this.listeners.set(event, set)
    return this
  }

  removeListener<T = unknown>(event: string, handler: EventHandler<T>): this {
    const set = this.listeners.get(event)
    if (!set) {
      return this
    }

    set.delete(handler as EventHandler)
    if (set.size === 0) {
      this.listeners.delete(event)
    }

    return this
  }

  emit<T = unknown>(event: string, payload: T): boolean {
    const set = this.listeners.get(event)
    if (!set) {
      return false
    }

    for (const handler of set) {
      handler(payload)
    }

    return true
  }
}
