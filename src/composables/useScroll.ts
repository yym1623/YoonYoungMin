import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

interface UseScrollOptions {
  threshold?: number
  onScroll?: (isActive: boolean) => void
}

/**
 * 스크롤 이벤트를 관리하는 composable
 */
export const useScroll = (elementRef: Ref<HTMLElement | undefined>, options: UseScrollOptions = {}) => {
  const { threshold = -300, onScroll } = options
  const isActive = ref(false)

  const handleScroll = () => {
    if (!elementRef.value) return

    const shouldBeActive = window.scrollY > elementRef.value.offsetTop + threshold
    isActive.value = shouldBeActive
    onScroll?.(shouldBeActive)
  }

  onMounted(() => {
    document.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', handleScroll)
  })

  return { isActive }
}

