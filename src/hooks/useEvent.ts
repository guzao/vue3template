import { isTrue, isWindow } from '@/utils'
import { onMounted, onBeforeUnmount } from 'vue'
import { useState } from './useState'
import { ref } from 'vue'

type UseEventHnadle = (event: any) => void
export function useEvent <K extends keyof WindowEventMap>(element: string | Window, eventName: K, handle: UseEventHnadle) {

  let el
  const eventHandle = handle

  const addEventListener = () => {
    if (isTrue(isWindow(element))) {
      window.addEventListener(eventName, eventHandle)
    } else {
      el = document.querySelector(element as string)
      el && el.addEventListener(eventName, eventHandle)
    }
  }
  
  const removeEventListener = () => window.removeEventListener(eventName, eventHandle)

  onMounted(addEventListener)

  onBeforeUnmount(removeEventListener)

  return {
    addEventListener,
    removeEventListener
  }

}

export function useMouse (element?: string) {

  const [ x, setX ] = useState(0)
  const [ y, setY ] = useState(0)

  const { addEventListener, removeEventListener } = useEvent(element || window, 'mousemove', (event: MouseEvent) => {
    const { pageX, pageY } = event
    x.value = pageX
    y.value = pageY
  })

  return {
    x, 
    y,
    addEventListener,
    removeEventListener
  }
  
}


