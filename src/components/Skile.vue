<script setup lang="ts">
type SkillHighlight = {
  title: string
  summary: string
  bullets: string[]
  accent: string
}

const skillTags = [
  'Vue3',
  'Nuxt.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Vite',
  'Node.js',
  'Express'
]

const skillHighlights: SkillHighlight[] = [
  {
    title: 'Vue · Nuxt Ecosystem',
    summary: '실무에 맞춘 컴포넌트 설계와 상태 관리, 라우팅 전략을 설계.',
    bullets: [
      'Vue2 Option API와 Vue3 Composition API 모두 구현 경험',
      'Pinia · Vuex로 페이지 규모에 맞는 상태 관리 패턴 설계'
    ],
    accent: 'from-[#00adb5] to-[#38bdf8]'
  },
  {
    title: 'React Study',
    summary: 'React 18과 최신 생태계를 학습하며 UI 설계 역량을 확장.',
    bullets: ['기초 훅과 컴포넌트 패턴 학습 중', 'Next.js · Zustand 등 도입을 목표로 실습'],
    accent: 'from-[#a78bfa] to-[#6366f1]'
  },
  {
    title: 'HTML · CSS',
    summary: '시맨틱 마크업과 애니메이션 경험을 기반으로 다양한 인터랙션을 구현.',
    bullets: [
      '웹 표준 · 접근성 원칙을 지키며 구조화',
      'SCSS와 Tailwind를 활용한 반응형 스타일링',
      'Keyframe 애니메이션과 마이크로 인터랙션 구현'
    ],
    accent: 'from-[#f472b6] to-[#fb7185]'
  },
  {
    title: 'JavaScript',
    summary: 'ES6+와 번들러/테스트 환경을 활용해 안정적인 프론트엔드 환경 구축.',
    bullets: [
      'Webpack · Parcel · Vite를 활용한 빌드 구성 경험',
      'Jest로 핵심 로직 단위 테스트 작성',
      'Babel · TypeScript 기반 모던 문법에 익숙'
    ],
    accent: 'from-[#fbbf24] to-[#f97316]'
  },
  {
    title: 'Build & DevOps',
    summary: '빌드 속도 최적화 및 서비스 성장 단계에 맞춘 환경 구성.',
    bullets: ['Vite · Webpack 구성 최적화', 'Docker 기반 로컬/배포 환경화', 'CI/CD(GitHub Actions) 파이프라인 설계', 'AWS S3 · CloudFront 배포 운영'],
    accent: 'from-[#38bdf8] to-[#0ea5e9]'
  },
  {
    title: 'Collaboration Tools',
    summary: '협업 도구를 활용해 디자인, 기획, 개발 간 커뮤니케이션을 명확하게 유지',
    bullets: ['Jira · Notion 중심의 업무 정리', 'Figma 프로토타입 피드백', 'Slack 실시간 커뮤니케이션', 'Postman · Swagger 기반 API 협업'],
    accent: 'from-[#94a3b8] to-[#475569]'
  }
]
</script>

<template>
  <section class="w-full py-24 font-['Montserrat',sans-serif] text-white">
    <div class="mx-auto max-w-6xl px-4 md:px-10">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#38bdf8]">Skills</p>
        <h2 class="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Tech Stack & Focus</h2>
        <p class="mt-4 text-base text-slate-300">
          프레임워크 중심의 UI 개발부터 빌드/테스트 자동화까지, 서비스 품질을 높이는 기술을 꾸준히 다듬고 있습니다.
        </p>
      </div>

      <div class="mt-10 flex flex-wrap justify-center gap-3 text-sm font-semibold">
        <span
          v-for="tag in skillTags"
          :key="tag"
          class="rounded-full border border-white/20 px-4 py-2 text-slate-200 transition hover:border-[#00adb5] hover:text-white"
        >
          {{ tag }}
        </span>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-2">
        <article
          v-for="highlight in skillHighlights"
          :key="highlight.title"
          class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_70px_rgba(8,12,33,0.4)] transition hover:-translate-y-1 hover:border-[#00adb5]"
        >
          <div class="flex items-center gap-4">
            <div class="h-14 w-14 rounded-2xl bg-gradient-to-br" :class="highlight.accent"></div>
            <div>
              <h3 class="text-2xl font-bold text-white">{{ highlight.title }}</h3>
              <p class="mt-1 text-sm text-slate-200">{{ highlight.summary }}</p>
            </div>
          </div>
          <ul class="mt-6 space-y-3 text-sm text-slate-100">
            <li
              v-for="(bullet, idx) in highlight.bullets"
              :key="`${highlight.title}-${idx}`"
              class="flex items-start gap-3"
            >
              <span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#00adb5]"></span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>