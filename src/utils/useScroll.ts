import { useEffect, useRef, useState, type RefObject } from 'react'

interface ScrollThreshold {
  threshold: number
  callback: (isActive: boolean) => void
}

interface ScrollWatcher {
  elementRef: RefObject<HTMLElement | null>
  thresholds: ScrollThreshold[]
}

let watchers: ScrollWatcher[] = []
let isListening = false

const handleScroll = () => {
  watchers.forEach(({ elementRef, thresholds }) => {
    if (!elementRef.current) return
    thresholds.forEach(({ threshold, callback }) => {
      const isActive = window.scrollY > elementRef.current!.offsetTop + threshold
      callback(isActive)
    })
  })
}

export const registerScrollWatcher = (watcher: ScrollWatcher) => {
  watchers.push(watcher)
  if (!isListening) {
    isListening = true
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }
}

export const unregisterScrollWatcher = (elementRef: RefObject<HTMLElement | null>) => {
  watchers = watchers.filter(w => w.elementRef !== elementRef)
  if (watchers.length === 0 && isListening) {
    isListening = false
    window.removeEventListener('scroll', handleScroll)
  }
}

interface ScrollProgressOptions {
  startElement: RefObject<HTMLElement | null>
  endElement?: RefObject<HTMLElement | null>
  onProgress?: (progress: number) => void
}

export const useScrollProgress = (options: ScrollProgressOptions) => {
  const { startElement, endElement } = options
  const onProgressRef = useRef(options.onProgress)
  onProgressRef.current = options.onProgress
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calculateProgress = () => {
      if (!startElement.current) return
      const startTop = startElement.current.offsetTop
      const startHeight = startElement.current.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      let endTop: number
      if (endElement?.current) {
        endTop = endElement.current.offsetTop
      } else {
        endTop = startTop + startHeight + windowHeight
      }
      const startPoint = startTop + startHeight / 2 - windowHeight / 2
      if (scrollY >= startPoint) {
        const scrollRange = endTop - startPoint
        const scrolled = scrollY - startPoint
        const calculatedProgress = Math.min(Math.max(scrolled / scrollRange, 0), 1)
        setProgress(calculatedProgress)
        onProgressRef.current?.(calculatedProgress)
      } else {
        setProgress(0)
        onProgressRef.current?.(0)
      }
    }
    calculateProgress()
    window.addEventListener('scroll', calculateProgress)
    return () => window.removeEventListener('scroll', calculateProgress)
  }, [startElement, endElement])

  return { progress }
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
