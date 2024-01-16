let alreadyTested = false
let passiveSupported = false

const isSupported = () => {
  if (alreadyTested) return passiveSupported
  alreadyTested = true

  // Test via a getter in the options object to see if the passive property is accessed
  const opts = Object.defineProperty({}, 'passive', {
    get: () => {
      passiveSupported = true
    }
  })
  const wndw = window as any
  try {
    wndw.addEventListener('test', null, opts) as any
  } catch (e) {
    return passiveSupported
  }
  wndw.removeEventListener('test', null, opts) as any
  return passiveSupported
}

const passiveEvent = () => {
  return isSupported() ? { passive: true } : false
}

export { passiveEvent }
