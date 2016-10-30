import {validShortcuts} from '../models/shortcuts'

// Key codes
const keyK = 75
const keyL = 76
const keyD = 68
const keyLeft = 37
const keyRight = 39
const keyWindows = 91

export function isModifierPressed(e) {
  return (e.ctrlKey || e.keyCode === keyWindows || e.metaKey) && e.shiftKey
}

function check(e) {
  if (!isModifierPressed(e)) return false

  switch (e.keyCode) {
    case keyK:
      e.preventDefault()
      return 'cmdShiftK'
    case keyL:
      e.preventDefault()
      return 'cmdShiftL'
    case keyD:
      e.preventDefault()
      return 'cmdShiftD'
    case keyLeft:
      e.preventDefault()
      return 'cmdShiftLeft'
    case keyRight:
      e.preventDefault()
      return 'cmdShiftRight'
    default:
      return false
  }
}

export default function observeKeyEvents(store) {
  window.addEventListener('keydown', event => {
    const combination = check(event)
    if (combination) {
      if (!validShortcuts.includes(combination)) {
        console.warn(`Combination ${combination} is not a valid shortcut`)
        return
      }
      store.dispatch(combination)
    }
  })
}
