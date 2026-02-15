import { scrollToTop } from '@/utils/useScroll'

interface ScrollToTopProps { active?: boolean }

export default function ScrollToTop({ active = false }: ScrollToTopProps) {
  return (
    <button type="button" onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[1000] flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#393e46] transition-opacity duration-700 shadow-lg ${active ? 'opacity-100' : 'opacity-0'}`}>
      <span className="material-symbols-outlined text-xl animate-bounce">arrow_upward</span>
    </button>
  )
}
