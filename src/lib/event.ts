let alreadyTested = false
let passiveSupported = false

const isSupported = (): boolean => {
  if (alreadyTested) return passiveSupported
  alreadyTested = true

  // Test via a getter in the options object to see if the passive property is accessed
  const opts = Object.defineProperty({}, 'passive', {
    get: () => {
      passiveSupported = true
      return passiveSupported
    }
  })
  const wndw = window
  const noop = () => {}
  try {
    wndw.addEventListener('test', noop, opts as AddEventListenerOptions)
  } catch {
    return passiveSupported
  }
  wndw.removeEventListener('test', noop, opts as AddEventListenerOptions)
  return passiveSupported
}

const passiveEvent = (): AddEventListenerOptions | boolean => {
  return isSupported() ? { passive: true } : false
}

export { passiveEvent }
