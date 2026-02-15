import { useState, useEffect, useRef, useMemo } from 'react'
import { useScrollProgress } from '@/utils/useScroll'

export default function Main() {
  const header = useRef<HTMLDivElement>(null)
  const mainContainer = useRef<HTMLDivElement>(null)
  const [leftFixed, setLeftFixed] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  const { progress: scrollProgress } = useScrollProgress({
    startElement: header,
  })

  const translateX = useMemo(() => {
    if (!animationComplete) return '0%'
    return `${scrollProgress * 100}%`
  }, [animationComplete, scrollProgress])

  const opacity = useMemo(() => {
    if (!animationComplete) return 1
    return 1 - scrollProgress
  }, [animationComplete, scrollProgress])

  useEffect(() => {
    setLeftFixed(false)
    const timer1 = setTimeout(() => {
      setLeftFixed(true)
      setTimeout(() => {
        setAnimationComplete(true)
      }, 1000)
    }, 100)
    if (mainContainer.current) {
      mainContainer.current.style.overflowX = 'hidden'
    }
    return () => clearTimeout(timer1)
  }, [])

  return (
    <div className="__Container flex w-full">
      <div
        className="Main__Container flex h-full w-full items-center justify-center font-montserrat text-[5rem] md:text-[7rem]"
        ref={mainContainer}
      >
        <div
          ref={header}
          className={`overflow-hidden ${animationComplete ? 'transition-transform duration-100 ease-out' : ''}`}
          style={{ transform: animationComplete ? `translateX(${translateX})` : 'translateX(0)', opacity }}
        >
          <div
            key={`text-${leftFixed}-${animationComplete}`}
            className={`text-center text-[#eeeeee] ${!leftFixed ? 'opacity-0 -translate-x-full' : 'opacity-100'} ${leftFixed && !animationComplete ? 'animate-fadeInLeft' : ''}`}
            style={{ WebkitTextStroke: '0.02em #00adb5' }}
          >
            YOON YOUNG MIN
          </div>
        </div>
      </div>
    </div>
  )
}
