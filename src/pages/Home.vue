<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Main from '@/components/Main.vue'
import Profile from '@/components/Profile.vue'
import Skile from '@/components/Skile.vue'
import Project from '@/components/Project.vue'
import Career from '@/components/Career.vue'
import Stars from '@/components/Stars.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'

import { registerScrollWatcher, unregisterScrollWatcher } from '@/utils/useScroll'

const main = ref<HTMLElement | null>(null)
const carreers = ref<HTMLElement | null>(null)
const carreerActive = ref(false)
const topActive = ref(false)

onMounted(() => {
  // Main 섹션을 벗어나면 ScrollToTop 표시
  registerScrollWatcher({
    elementRef: main,
    thresholds: [
      {
        threshold: 0,
        callback: (isActive) => {
          topActive.value = isActive
        }
      }
    ]
  })

  // Career 섹션 기준 배경색 변경
  registerScrollWatcher({
    elementRef: carreers,
    thresholds: [
      {
        threshold: -200,
        callback: (isActive) => {
          carreerActive.value = isActive
        }
      }
    ]
  })
})

onBeforeUnmount(() => {
  unregisterScrollWatcher(main)
  unregisterScrollWatcher(carreers)
})
</script>

<template>
  <div class="relative">
    <div
      class="fixed inset-0 -z-10 transition-colors duration-500"
      :class="carreerActive ? 'bg-white' : 'bg-[#222831]'"
    >
      <Stars />
    </div>

    <div class="relative flex flex-col">
      <section ref="main" class="flex min-h-screen w-full"><Main  /></section>
      <section class="flex min-h-screen w-full"><Profile  /></section>
      <section class="flex min-h-screen w-full"><Skile  /></section>
      <section ref="carreers" class="flex min-h-screen w-full"><Career  /></section>
      <section class="flex min-h-screen w-full"><Project  /></section>
      <ScrollToTop :active="topActive" />
    </div>
  </div>
</template>

