/**
 * 외부 링크를 새 창에서 엽니다
 */
export const openLink = (href: string): void => {
  window.open(href, '_blank')
}

/**
 * 부드럽게 스크롤을 맨 위로 이동합니다
 */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

