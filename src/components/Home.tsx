'use client'

import { useState, useRef, useEffect } from 'react'

import MainSection from '@/components/Main'
import Profile from '@/components/Profile'
import Skile from '@/components/Skile'
import Project from '@/components/Project'
import Career from '@/components/Career'
import Stars from '@/components/Stars'
import ScrollToTop from '@/components/ScrollToTop'
import { registerScrollWatcher, unregisterScrollWatcher } from '@/utils/useScroll'

export default function Home() {
  const main = useRef<HTMLElement>(null)
  const careers = useRef<HTMLElement>(null)
  const projects = useRef<HTMLElement>(null)
  const [careerActive, setCareerActive] = useState(false)
  const [projectActive, setProjectActive] = useState(false)
  const [topActive, setTopActive] = useState(false)

  useEffect(() => {
    registerScrollWatcher({
      elementRef: main,
      thresholds: [{ threshold: 0, callback: (isActive) => setTopActive(isActive) }]
    })
    registerScrollWatcher({
      elementRef: careers,
      thresholds: [{ threshold: -200, callback: (isActive) => setCareerActive(isActive) }]
    })
    registerScrollWatcher({
      elementRef: projects,
      thresholds: [{ threshold: -200, callback: (isActive) => setProjectActive(isActive) }]
    })
    return () => {
      unregisterScrollWatcher(main)
      unregisterScrollWatcher(careers)
      unregisterScrollWatcher(projects)
    }
  }, [])

  return (
    <div className="relative">
      <div className={`fixed inset-0 -z-10 transition-colors duration-500 ${
        projectActive ? 'bg-black' : careerActive ? 'bg-white' : 'bg-[#222831]'
      }`}>
        <Stars />
      </div>
      <div className="relative flex flex-col">
        <section ref={main} className="flex min-h-screen w-full"><MainSection /></section>
        <section className="flex min-h-screen w-full"><Profile /></section>
        <section className="flex min-h-screen w-full"><Skile /></section>
        <section ref={careers} className="flex min-h-screen w-full"><Career /></section>
        <section ref={projects} className="flex min-h-screen w-full"><Project active={projectActive} /></section>
        <ScrollToTop active={topActive} />
      </div>
    </div>
  )
}
