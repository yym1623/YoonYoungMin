<script setup lang="ts">
import { ref } from 'vue'
import { openLink } from '@/utils/openLink'
import type { Paragraph } from '@/types/profile'

const myimg = ref(false)

const contactButtons = [
  {
    label: 'yym1623@naver.com',
    href: 'mailto:yym1623@naver.com'
  },
  {
    label: 'GITHUB',
    href: 'https://github.com/yym1623'
  },
  {
    label: 'BLUG',
    href: 'https://young-min.netlify.app/'
  },
  {
    label: 'RESUME',
    href: 'https://www.figma.com/file/03Le7GFj5cEVf3UOxmQcRE/%EC%9C%A4%EC%98%81%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?type=design&node-id=0%3A1&mode=design&t=0t8WvqDlul2v9ILp-1'
  }
]

const profileParagraphs: Paragraph[] = [
  {
    parts: [
      { text: 'FrontEnd', highlight: true },
      { text: ' 를 깊이 있게 다지고 싶은 ' },
      { text: '주니어 개발자', highlight: true },
      { text: ' 입니다!' }
    ]
  },
  {
    parts: [{ text: '로드맵을 보면서 Front, Back 가리지 않고 재밌게 배워가고 있습니다.' }]
  },
  {
    parts: [
      { text: '"몰아치는 파도를 피하지 말고 올라타라"', highlight: true }
    ]
  },
  {
    parts: [
      { text: '진행하다 막히고 해결할 때의 뿌듯함이 계속 ' },
      { text: '추진력', highlight: true },
      { text: ' 이 되어줍니다.' }
    ]
  },
  {
    parts: [
      { text: '항상 새로운 프로젝트를 만들면서 저 자신을 ' },
      { text: '성장시키는 기회', highlight: true },
      { text: ' 를 얻고 있습니다.' }
    ]
  }
]

</script>

<template>
  <section
    class="relative isolate flex min-h-[90vh] w-full items-center justify-center  from-[#050d21] via-[#0f1a33] to-[#111a2c] px-6 py-16 text-white"
  >
    <div class="pointer-events-none absolute inset-0 opacity-0">
      <div class="absolute -top-10 left-10 h-64 w-64 rounded-full  "></div>
      <div class="absolute bottom-0 right-0 h-80 w-80 rounded-full "></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_55%)]"></div>
    </div>

    <div class="relative grid w-full max-w-6xl gap-12 rounded-[48px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-3xl lg:grid-cols-2 lg:p-12">
      <div class="space-y-8">
        <div class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#74ebd5]">
          Profile
          <span class="h-1 w-1 rounded-full bg-[#74ebd5]"></span>
          윤영민
        </div>
        <div class="space-y-4">
          <p class="font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.6em] text-white/50">
            FrontEnd · Product · Growth
          </p>
          <p class="font-['Montserrat',sans-serif] text-4xl font-black text-white sm:text-5xl">
            파도를 즐기는 <span class="text-[#74ebd5]">FrontEnd Explorer</span>
          </p>
        </div>

        <div class="space-y-5 text-lg text-white/80">
          <p v-for="(paragraph, idx) in profileParagraphs" :key="idx">
            <template v-for="(part, partIdx) in paragraph.parts" :key="partIdx">
              <span
                v-if="part.highlight"
                class="bg-gradient-to-r from-[#74ebd5] to-[#00adb5] bg-clip-text text-2xl font-semibold text-transparent"
              >
                {{ part.text }}
              </span>
              <span v-else>{{ part.text }}</span>
            </template>
          </p>
        </div>

        <!-- <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-5 shadow-inner shadow-white/5">
            <p class="text-xs uppercase tracking-[0.35em] text-white/40">Projects</p>
            <p class="mt-2 text-3xl font-bold text-white">+15</p>
            <p class="text-sm text-white/60">Personal & team shipped</p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-5 shadow-inner shadow-white/5">
            <p class="text-xs uppercase tracking-[0.35em] text-white/40">Stack</p>
            <p class="mt-2 text-3xl font-bold text-white">Vue · TS</p>
            <p class="text-sm text-white/60">Design systems obsessed</p>
          </div>
        </div> -->
      </div>

      <div class="space-y-6">
        <div
          class="relative overflow-hidden rounded-[36px] border border-white/20 bg-gradient-to-b from-white/20 to-white/5 p-6 shadow-[0_15px_45px_rgba(10,10,60,0.4)]"
          @mouseenter="myimg = true"
          @mouseleave="myimg = false"
        >
          <p class="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Active
            <span class="h-2 w-2 rounded-full bg-emerald-300"></span>
          </p>
          <div class="mt-6 flex flex-col items-center gap-6 text-center">
            <div class="relative h-48 w-48">
              <div class="absolute inset-0 rounded-[36px] border border-white/30 bg-white/10 backdrop-blur-md transition duration-300" :class="myimg ? 'scale-105 border-white/60' : ''"></div>
              <img
                src="@/assets/myimg.png"
                alt="My profile image"
                class="absolute inset-0 m-auto w-[70%] object-contain"
              />
              <div
                :class="[
                  'absolute inset-0 flex flex-col items-center justify-center rounded-[36px] bg-slate-950/70 text-white transition-opacity duration-300',
                  myimg ? 'opacity-100' : 'opacity-0'
                ]"
              >
                <p class="text-lg font-semibold">윤영민</p>
                <p class="mt-1 text-sm tracking-widest text-white/70">1998.03.12</p>
              </div>
            </div>
            <div class="space-y-1 font-['Montserrat',sans-serif]">
              <p class="text-sm uppercase tracking-[0.35em] text-white/40">Position</p>
              <p class="text-2xl font-semibold text-white">FrontEnd Developer</p>
              <p class="text-sm text-white/60">생각을 인터랙션으로 풀어내는 사람</p>
            </div>
          </div>
        </div>

        <div class="rounded-[32px] border border-white/15 bg-white/5 p-6 shadow-inner shadow-black/20">
          <p class="text-xs uppercase tracking-[0.45em] text-white/40">Contact</p>
          <div class="mt-4 space-y-3">
            <button
              v-for="button in contactButtons"
              :key="button.label"
              type="button"
              class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3 text-left text-base font-semibold text-white/90 transition hover:-translate-y-[2px] hover:border-[#74ebd5]/60 hover:bg-white/10"
              @click="openLink(button.href)"
            >
              <span>{{ button.label }}</span>
              <span class="text-xs font-medium text-[#74ebd5]">OPEN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>