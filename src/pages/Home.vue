<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Main from '@/components/Main.vue'
import Profile from '@/components/Profile.vue'
import Skile from '@/components/Skile.vue'
import Project from '@/components/Project.vue'
import Career from '@/components/Career.vue'
import Stars from '@/components/Stars.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import Footer from '@/components/Footer.vue'

const carreers = ref<HTMLElement | null>(null)
const carreerActive = ref(false)
const topActive = ref(false)

const scrollEvent = () => {
  if (carreers.value) {
    // 배경색 변경
    if (window.scrollY > carreers.value.offsetTop + -200) {
      carreerActive.value = true
    } else {
      carreerActive.value = false
    }

    // 스크롤 탑 버튼 표시
    if (window.scrollY > carreers.value.offsetTop) {
      topActive.value = true
    } else {
      topActive.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('scroll', scrollEvent)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', scrollEvent)
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
      <section class="flex min-h-screen w-full"><Main  /></section>
      <section class="flex min-h-screen w-full"><Profile  /></section>
      <section class="flex min-h-screen w-full"><Skile  /></section>
      <section ref="carreers" class="flex min-h-screen w-full"><Career  /></section>
      <section class="flex min-h-screen w-full"><Project  /></section>
      <ScrollToTop :active="topActive" />
      <!-- <Footer /> -->
    </div>
  </div>
</template>

