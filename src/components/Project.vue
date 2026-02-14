<script setup lang="ts">
import { openLink } from '@/utils/openLink'
import type { ProjectCard } from '@/types/project'

const projectCards: ProjectCard[] = [
  {
    title: 'Test Project',
    period: '2026.02 ~ now',
    team: '1명',
    description: 'Test Project',
    tags: ['React', 'Next', 'Typescript', 'TailwindCSS', 'Zustand', 'Vite'],
    highlights: [
      'Test Project',
      'Test Project',
      'Test Project',
    ],
    links: [
      { label: 'Demo', href: '', variant: 'primary' },
      { label: 'GitHub', href: '', variant: 'secondary' }
    ],
    accent: 'from-[#a3ffd4] to-[#00adb5]'
  },
  {
    title: '관리자 시나리오 빌더',
    period: '2025.12 ~ 2026.01',
    team: '1명',
    description: '다양한 입력 컴포넌트를 조합하여 페이지를 구성할 수 있는 빌더 서비스',
    tags: ['Vue', 'Nuxt', 'Typescript', 'PrimeVue', 'TailwindCSS', 'Pinia', 'Vite'],
    highlights: [
      '컴포넌트 구조화 및 재사용성 고려하여 UI/UX 설계',
      '반응형 UI 구성으로 데스크톱/모바일 동시 대응',
      '유틸 및 모듈화에 중점으로 재사용성 확장',
      'Nuxt 기반 Supabase(PostgreSQL) 연동을 통한 인증 및 데이터 CRUD 기능 구현'
    ],
    links: [
      { label: 'Demo', href: 'https://my-comps.vercel.app/', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/yym1623/my-comp', variant: 'secondary' }
    ],
    accent: 'from-[#a3ffd4] to-[#00adb5]'
  },
  {
    title: 'API 영화 검색',
    period: '2022.10 ~ 2022.11',
    team: '1명',
    description: '최신/인기 영화를 검색하고 즐겨찾기까지 할 수 있는 영화 검색 서비스',
    tags: ['Vue', 'Nuxt','Typescript', 'TailwindCSS', 'Pinia', 'Vite'],
    highlights: [
      '외부 영화 API 연동 및 비동기 데이터 흐름 설계, 로딩/에러 상태 분리 처리',
      '컴포넌트 단위 분리 및 재사용 구조 설계로 유지보수성 향상',
      '반응형 레이아웃 설계 및 UX를 고려한 인터랙션 구현',
      '로컬 스토리지를 활용한 사용자 데이터 영속화 및 상태 복원 처리'
    ],
    links: [
      { label: 'Demo', href: 'https://spmv.netlify.app/#/', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/yym1623/SPMV', variant: 'secondary' }
    ],
    accent: 'from-[#a3ffd4] to-[#00adb5]'
  },
  {
    title: 'Instagram 클론 개발',
    period: '2022.12 ~ 2023.01',
    team: '1명',
    description: '실시간 메시지와 게시물 피드를 포함한 인스타그램 클론 프로젝트입니다.',
    tags: ['Vue', 'Nuxt', 'Typescript', 'TailwindCSS', 'Pinia', 'Vite', 'Nest'],
    highlights: [
      '컴포넌트 구조화 및 재사용성 고려하여 UI/UX 설계',
      'socket.io 기반 실시간 메시지 기능',
      'NestJS 기반 세션/토큰 인증 구조 설계 및 로그인 상태 관리 구현',
      'NestJS + Supabase(PostgreSQL) 연동을 통한 CRUD API 설계 및 데이터 계층 분리'
    ],
    links: [
      { label: 'Demo', href: 'https://y-instagram.netlify.app/#/login', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/yym1623/instagram', variant: 'secondary' }
    ],
    accent: 'from-[#a3ffd4] to-[#00adb5]'

  }
]

const props = defineProps<{
  active?: boolean
}>()
</script>

<template>
  <section class="w-full py-24">
    <div class="mx-auto max-w-6xl px-4 font-['Montserrat',sans-serif] md:px-10 lg:px-16">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#00adb5]">Selected work</p>
        <h2
          class="mt-4 text-4xl font-extrabold transition-colors duration-500 sm:text-5xl"
          :class="active ? 'text-white' : 'text-[#111827]'"
        >Projects</h2>
        <p
          class="mt-4 text-base transition-colors duration-500"
          :class="active ? 'text-white/50' : 'text-[#6b7280]'"
        >
          실제 서비스 경험과 토이 프로젝트를 통해 쌓은 문제 해결 방식과 결과물입니다.
        </p>
      </div>

      <div class="mt-16 flex flex-col gap-12">
        <article
          v-for="(project, idx) in projectCards"
          :key="project.title"
          :class="[
            'relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1',
            active
              ? 'border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-sm hover:border-[#00adb5]/60'
              : 'border border-[#e5e7eb] bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)] hover:border-[#00adb5]',
            idx % 2 === 0 ? 'md:mr-14' : 'md:ml-14'
          ]"
        >
          <!-- <div class="h-1.5 w-16 rounded-full bg-gradient-to-r" :class="project.accent"></div> -->
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3
                class="text-3xl font-bold transition-colors duration-500"
                :class="active ? 'text-white' : 'text-[#111827]'"
              >{{ project.title }}</h3>
              <p
                class="mt-2 text-base transition-colors duration-500"
                :class="active ? 'text-white/60' : 'text-[#4b5563]'"
              >
                {{ project.description }}
              </p>
            </div>
            <span class="rounded-full border border-[#00adb5]/50 bg-[#00adb5]/10 px-4 py-1 text-sm font-semibold text-[#00adb5]">
              {{ project.period }} · {{ project.team }}
            </span>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="`${project.title}-${tag}`"
              class="rounded-full bg-[#00adb5]/15 px-3 py-1 text-sm font-semibold text-[#00adb5]"
            >
              {{ tag }}
            </span>
          </div>

          <ul
            class="mt-6 space-y-3 text-base transition-colors duration-500"
            :class="active ? 'text-white/80' : 'text-[#1f2937]'"
          >
            <li
              v-for="(highlight, highlightIdx) in project.highlights"
              :key="`${project.title}-highlight-${highlightIdx}`"
              class="flex items-start gap-3"
            >
              <span class="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#00adb5]"></span>
              <span>{{ highlight }}</span>
            </li>
          </ul>

          <div class="mt-8 flex flex-wrap gap-3">
            <button
              v-for="link in project.links"
              :key="`${project.title}-${link.label}`"
              type="button"
              @click="openLink(link.href)"
              :class="[
                'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-500',
                link.variant === 'primary'
                  ? 'bg-[#00adb5] text-white shadow-lg shadow-[#00adb5]/30 hover:bg-[#0095a1]'
                  : active
                    ? 'border border-white/30 text-white/90 hover:bg-white/10 hover:border-white/50'
                    : 'border border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white'
              ]"
            >
              {{ link.label }}
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>