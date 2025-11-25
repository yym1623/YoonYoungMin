import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

interface ScrollThreshold {
  threshold: number
  callback: (isActive: boolean) => void
}

interface UseScrollOptions {
  threshold?: number
  onScroll?: (isActive: boolean) => void
}

interface ScrollWatcher {
  elementRef: Ref<HTMLElement | null>
  thresholds: ScrollThreshold[]
}

// 전역 스크롤 이벤트 관리
let watchers: ScrollWatcher[] = []
let isListening = false

const handleScroll = () => {
  watchers.forEach(({ elementRef, thresholds }) => {
    if (!elementRef.value) return

    thresholds.forEach(({ threshold, callback }) => {
      const isActive = window.scrollY > elementRef.value!.offsetTop + threshold
      callback(isActive)
    })
  })
}

export const registerScrollWatcher = (watcher: ScrollWatcher) => {
  watchers.push(watcher)
  
  if (!isListening) {
    isListening = true
    document.addEventListener('scroll', handleScroll)
    // 초기 상태 설정
    handleScroll()
  }
}

export const unregisterScrollWatcher = (elementRef: Ref<HTMLElement | null>) => {
  watchers = watchers.filter(w => w.elementRef !== elementRef)
  
  if (watchers.length === 0 && isListening) {
    isListening = false
    document.removeEventListener('scroll', handleScroll)
  }
}

interface ScrollProgressOptions {
  startElement: Ref<HTMLElement | null>
  endElement?: Ref<HTMLElement | null>
  onProgress?: (progress: number) => void
}

/**
 * 스크롤 진행도를 계산하는 함수
 * @param options 시작 요소, 종료 요소, 진행도 콜백
 * @returns 진행도 (0~1)
 */
export const useScrollProgress = (options: ScrollProgressOptions) => {
  const { startElement, endElement, onProgress } = options
  const progress = ref(0)

  const calculateProgress = () => {
    if (!startElement.value) return

    const startTop = startElement.value.offsetTop
    const startHeight = startElement.value.offsetHeight
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    let endTop: number
    if (endElement?.value) {
      endTop = endElement.value.offsetTop
    } else {
      // 다음 섹션까지의 거리를 대략적으로 계산 (Main 섹션 높이 + 화면 높이)
      endTop = startTop + startHeight + windowHeight
    }

    // Main 섹션의 중간 지점부터 시작 (섹션이 화면 중앙에 올 때)
    const startPoint = startTop + startHeight / 2 - windowHeight / 2
    
    // 스크롤이 시작 지점을 넘어서면 진행도 계산
    if (scrollY >= startPoint) {
      const scrollRange = endTop - startPoint
      const scrolled = scrollY - startPoint
      const calculatedProgress = Math.min(Math.max(scrolled / scrollRange, 0), 1)
      progress.value = calculatedProgress
      onProgress?.(calculatedProgress)
    } else {
      progress.value = 0
      onProgress?.(0)
    }
  }

  onMounted(() => {
    calculateProgress()
    document.addEventListener('scroll', calculateProgress)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', calculateProgress)
  })

  return { progress }
}

/**
 * 여러 스크롤 임계값을 관리하는 composable (전역 스크롤 이벤트 사용)
 * @param elementRef 스크롤 위치를 확인할 요소의 ref
 * @param thresholds 임계값과 콜백 함수 배열
 */
export const useScrollThreshold = (
  elementRef: Ref<HTMLElement | null>,
  thresholds: ScrollThreshold[]
) => {
  onMounted(() => {
    registerScrollWatcher({ elementRef, thresholds })
  })

  onBeforeUnmount(() => {
    unregisterScrollWatcher(elementRef)
  })
}

/**
 * 페이지 상단으로 부드럽게 스크롤하는 함수
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
 * 단일 스크롤 임계값을 관리하는 composable
 * @param elementRef 스크롤 위치를 확인할 요소의 ref
 * @param options 임계값 옵션
 * @returns isActive ref
 */
export const useScroll = (
  elementRef: Ref<HTMLElement | null>,
  options: UseScrollOptions = {}
): { isActive: Ref<boolean> } => {
  const { threshold = -300, onScroll } = options
  const isActive = ref(false)

  useScrollThreshold(elementRef, [
    {
      threshold,
      callback: (active) => {
        isActive.value = active
        onScroll?.(active)
      }
    }
  ])

  return { isActive }
}
