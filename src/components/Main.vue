<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useScrollProgress } from '@/utils/useScroll'

const header = ref<HTMLElement | null>(null)
const leftFixed = ref(false)
const Main__Container = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)
const animationComplete = ref(false)

useScrollProgress({
  startElement: header,
  onProgress: (prog) => {
    scrollProgress.value = prog
  }
})

// 스크롤 진행도에 따라 오른쪽으로 이동 (0~100%)
// 애니메이션이 완료된 후에만 적용
const translateX = computed(() => {
  // 애니메이션이 완료되지 않았거나 스크롤이 0이면 transform 적용 안 함
  if (!animationComplete.value) {
    return '0%'
  }
  return `${scrollProgress.value * 100}%`
})

// 스크롤 진행도에 따라 opacity 감소
const opacity = computed(() => {
  // 애니메이션이 완료된 후에만 opacity 변경
  if (!animationComplete.value) {
    return 1
  }
  return 1 - scrollProgress.value
})

onMounted(() => {
  // 처음에는 왼쪽에 숨기고, 약간의 딜레이 후 왼쪽에서 중간으로 슬라이드
  leftFixed.value = false
  setTimeout(() => {
    leftFixed.value = true
    // 애니메이션 완료 후 (1초 후) 스크롤 진행도 적용 가능하도록 설정
    setTimeout(() => {
      animationComplete.value = true
    }, 1000)
  }, 100)
  
  if (Main__Container.value) {
    Main__Container.value.style.overflowX = 'hidden'
  }
})

onBeforeUnmount(() => {
  // useScrollProgress에서 이미 이벤트 리스너를 정리함
})

</script>

<template>
  <div class="__Container flex w-full">
    <div
      class="Main__Container flex h-full w-full items-center justify-center font-['Montserrat',sans-serif] text-[5rem] md:text-[7rem]"
      ref="Main__Container"
    >
      <div
        ref="header"
        class="overflow-hidden"
        :class="[
          animationComplete ? 'transition-transform duration-100 ease-out' : ''
        ]"
        :style="{
          transform: animationComplete ? `translateX(${translateX})` : 'translateX(0)',
          opacity: opacity
        }"
      >
        <div
          :key="`text-${leftFixed}-${animationComplete}`"
          class="text-center text-[#eeeeee]"
          :class="[
            !leftFixed ? 'opacity-0 -translate-x-full' : 'opacity-100',
            leftFixed && !animationComplete ? 'animate-fadeInLeft' : ''
          ]"
          :style="{ '-webkit-text-stroke': '0.02em #00adb5' }"
        >
          YOON YOUNG MIN
        </div>
      </div>
    </div>
  </div>
</template>
