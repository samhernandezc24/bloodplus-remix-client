import {useCallback, useEffect, useRef, useState, type RefCallback} from 'react'

export type ElementState = 'active' | 'focus' | 'hover' | 'initial'

// Esto comenzó como una solución para https://github.com/framer/motion/issues/1221,
// pero es mucho más ahora. Las variantes en framer motion soportan hover, focus
// y tap, mientras que este efecto también escucha la pulsación de tecla, por lo que `Enter`
// resulta en un estado activo también.
function useElementState(): [RefCallback<HTMLElement>, ElementState] {
  const ref = useRef<HTMLElement | null>(null)
  const [state, setState] = useState({
    focus: false,
    hover: false,
    active: false,
  })

  const setRef: RefCallback<HTMLElement> = useCallback(element => {
    ref.current = element
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const pointerenter = () => setState(s => ({...s, hover: true}))
    const pointerleave = () => setState(s => ({...s, hover: false}))
    const focus = () => setState(s => ({...s, focus: true}))
    const blur = () => setState(s => ({...s, focus: false}))
    const pointerdown = () => {
      setState(s => ({...s, active: true}))

      // los eventos de pointer pueden ser cancelados debido a lo cual el nunca recibiría
      // un evento pointerup ni pointercancel. Escucha en la ventana para esos
      // después de recibir el evento pointerdown, y sólo catchearlo una vez. Pero
      // no con { once: true }, porque queremos eliminar ambos, una vez lo recibimos.
      const pointerup = () => {
        setState(s => ({...s, active: false}))
        window.removeEventListener('pointerup', pointerup)
        window.removeEventListener('pointercancel', pointerup)
      }

      window.addEventListener('pointerup', pointerup)
      window.addEventListener('pointercancel', pointerup)
    }

    const keydown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return
      }

      setState(s => ({...s, active: true}))

      // cuando se hace click en un link, el keyup no necesita venir del keydown
      // elemento. Escuchamos en la ventana en su lugar, pero sólo una vez.
      const keyup = () => setState(s => ({...s, active: false}))
      window.addEventListener('keyup', keyup, {once: true})
    }

    el.addEventListener('pointerenter', pointerenter)
    el.addEventListener('pointerleave', pointerleave)
    el.addEventListener('focus', focus)
    el.addEventListener('blur', blur)
    el.addEventListener('pointerdown', pointerdown)
    el.addEventListener('keydown', keydown)

    return () => {
      el.removeEventListener('pointerenter', pointerenter)
      el.removeEventListener('pointerleave', pointerleave)
      el.removeEventListener('focus', focus)
      el.removeEventListener('blur', blur)
      el.removeEventListener('pointerdown', pointerdown)
      el.removeEventListener('keydown', keydown)
    }
  })

  const status: ElementState = state.active
    ? 'active'
    : state.focus
    ? 'focus'
    : state.hover
    ? 'hover'
    : 'initial'

  return [setRef, status]
}

export {useElementState}
