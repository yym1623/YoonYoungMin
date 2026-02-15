// 외부 링크를 새 탭에서 여는 유틸 함수
export const openLink = (href: string): void => {
  window.open(href, '_blank', 'noopener,noreferrer')
}