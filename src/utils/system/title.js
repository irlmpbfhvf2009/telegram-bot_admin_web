import { systemTitle } from '@/config'

export function changeTitle(name) {
  document.title = `${systemTitle}-${name}`
}
