<script setup lang="ts">
type ProjectLink = {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

type ProjectCard = {
  title: string
  period: string
  team: string
  description: string
  tags: string[]
  highlights: string[]
  links: ProjectLink[]
  accent: string
}

const projectCards: ProjectCard[] = [
  {
    title: 'API 영화 검색',
    period: '2022.10 ~ 2022.11',
    team: '1명',
    description: '최신/인기 영화를 검색하고 즐겨찾기까지 할 수 있는 개인 토이 프로젝트입니다.',
    tags: ['Vue3', 'Node', 'Vite'],
    highlights: [
      '외부 영화 검색 엔진 연동으로 실시간 데이터 제공',
      '검색 엔진 사이트 계정 연동으로 평점/저장 기능 구현',
      '반응형 UI 구성으로 데스크톱/모바일 동시 대응',
      '로컬 스토리지를 활용해 즐겨찾기 데이터 저장'
    ],
    links: [
      { label: 'Demo', href: 'https://spmv.netlify.app/#/', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/yym1623/SPMV', variant: 'secondary' }
    ],
    accent: 'from-[#a3ffd4] to-[#00adb5]'
  },
  {
    title: '편의점 조합 서비스',
    period: '2022.05 ~ 2022.08',
    team: '2명',
    description: '실시간 행사 상품과 레시피 조합을 제공하는 편의점 정보 서비스입니다.',
    tags: ['Vue3', 'Django', 'Nginx', 'MySQL', 'AWS'],
    highlights: [
      '토큰 기반 이메일 인증 및 회원 관리',
      'CU·GS·MINISTOP 행사 상품 크롤링 자동화',
      'AWS 인프라 위에서 Nginx + Django 백엔드 운영',
      'MySQL로 상품/조합 데이터 모델 관리'
    ],
    links: [
      { label: 'Demo', href: 'http://54.180.193.83:8080/', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/yym1623/Convenience', variant: 'secondary' }
    ],
    accent: 'from-[#ffd6a5] to-[#ff6f61]'
  },
  {
    title: 'Instagram 클론 개발',
    period: '2022.12 ~ 2023.01',
    team: '1명',
    description: '실시간 메시지와 게시물 피드를 포함한 인스타그램 클론 프로젝트입니다.',
    tags: ['Vue3', 'Vuex', 'Vite', 'Express', 'MySQL', 'AWS'],
    highlights: [
      'socket.io 기반 실시간 메시지 기능',
      'env 구분으로 개발/운영 환경 분리',
      'Express Session으로 로그인 상태 관리',
      'Express + MySQL 연동으로 게시물/댓글 CRUD 구축'
    ],
    links: [
      { label: 'Demo', href: 'https://y-instagram.netlify.app/#/login', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/yym1623/instagram', variant: 'secondary' }
    ],
    accent: 'from-[#9face6] to-[#9f7aea]'
  }
]

const openLink = (href: string) => {
  window.open(href, '_blank')
}
</script>

<template>
  <section class="w-full bg-white py-24">
    <div class="mx-auto max-w-6xl px-4 font-['Montserrat',sans-serif] md:px-10 lg:px-16">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#00adb5]">Selected work</p>
        <h2 class="mt-4 text-4xl font-extrabold text-[#111827] sm:text-5xl">Projects</h2>
        <p class="mt-4 text-base text-[#6b7280]">
          실제 서비스 경험과 토이 프로젝트를 통해 쌓은 문제 해결 방식과 결과물입니다.
        </p>
      </div>

      <div class="mt-16 flex flex-col gap-12">
        <article
          v-for="(project, idx) in projectCards"
          :key="project.title"
          :class="[
            'relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#00adb5]',
            idx % 2 === 0 ? 'md:mr-14' : 'md:ml-14'
          ]"
        >
          <div class="h-1.5 w-16 rounded-full bg-gradient-to-r" :class="project.accent"></div>
          <div class="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 class="text-3xl font-bold text-[#111827]">{{ project.title }}</h3>
              <p class="mt-2 text-base text-[#4b5563]">
                {{ project.description }}
              </p>
            </div>
            <span class="rounded-full border border-[#00adb5] px-4 py-1 text-sm font-semibold text-[#00adb5]">
              {{ project.period }} · {{ project.team }}
            </span>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="`${project.title}-${tag}`"
              class="rounded-full bg-[#00adb5]/10 px-3 py-1 text-sm font-semibold text-[#00adb5]"
            >
              {{ tag }}
            </span>
          </div>

          <ul class="mt-6 space-y-3 text-base text-[#1f2937]">
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
                'rounded-full px-5 py-2 text-sm font-semibold transition',
                link.variant === 'primary'
                  ? 'bg-[#00adb5] text-white shadow-lg shadow-[#00adb5]/30 hover:bg-[#0095a1]'
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