<script setup lang="ts">
import { scrollToTop } from '@/utils/useScroll'

const props = withDefaults(
  defineProps<{
    active?: boolean
  }>(),
  {
    active: false
  }
)
</script>

<template>
  <button
    type="button"
    @click="scrollToTop"
    :class="[
      'fixed bottom-6 right-6 z-[1000] flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#393e46] transition-opacity duration-700 shadow-lg',
      props.active ? 'opacity-100' : 'opacity-0'
    ]"
  >
    <span class="material-symbols-outlined text-xl animate-bounce">arrow_upward</span>
  </button>
</template>

