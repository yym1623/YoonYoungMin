<script setup lang="ts">
type CareerItem = {
  company: string
  period: string
  role: string
  description?: string
  color: string
}

const careerItems: CareerItem[] = [
  {
    company: '피어라인',
    period: '2024.09 ~ 2025.11',
    role: '프론트엔드 개발 (대리)',
    description: '고객 맞춤 SaaS 대시보드 및 실시간 협업 기능 구축',
    color: 'from-[#ff9a62] to-[#ff6f61]'
  },
  {
    company: '레몬아이티',
    period: '2023.08 ~ 2024.08',
    role: '프론트엔드 개발 (주임)',
    description: '사내 디자인 시스템 정비 및 대시보드 성능 최적화',
    color: 'from-[#70c1ff] to-[#4a90e2]'
  },
  {
    company: '일렉트리',
    period: '2021.10 ~ 2023.01',
    role: 'SW 개발 (연구원)',
    description: 'IoT 디바이스 관제 웹 및 관리자 페이지 개발',
    color: 'from-[#9face6] to-[#74ebd5]'
  }
]
</script>

<template>
  <section class="w-full  py-24 font-['Montserrat',sans-serif]">
    <div class="mx-auto max-w-5xl px-4 md:px-8">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#c84b31]">Experience</p>
        <h2 class="mt-3 text-4xl font-extrabold text-[#111827] sm:text-5xl">Career Timeline</h2>
        <p class="mt-3 text-base text-[#6b7280]">
          다양한 조직에서 프론트엔드/웹 개발 경험을 통해 사용성과 안정성을 동시에 고민했습니다.
        </p>
      </div>

      <div class="relative mt-14">
        <div class="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-[#c84b31] to-transparent md:left-1/2 md:-translate-x-px"></div>

        <div class="flex flex-col gap-10">
          <article
            v-for="(career, idx) in careerItems"
            :key="career.company"
            :class="[
              'relative rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#00adb5]',
              'md:w-1/2',
              idx % 2 === 0 ? 'md:self-start md:mr-auto md:pr-8' : 'md:self-end md:ml-auto md:pl-8'
            ]"
          >
            <!-- <div
              class="absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#c84b31] text-sm font-bold text-white shadow-lg md:left-auto md:-translate-x-1/2"
              :class="idx % 2 === 0 ? 'md:right-0' : 'md:left-0'"
            >
              {{ idx + 1 }}
            </div> -->
            <div class="mt-6 md:mt-0">
              <div class="flex flex-wrap items-center gap-3">
                <h3 class="text-2xl font-bold text-[#111827]">{{ career.company }}</h3>
                <span
                  class="rounded-full bg-gradient-to-r px-4 py-1 text-sm font-semibold text-[#111827]"
                  :class="[career.color]"
                >
                  {{ career.period }}
                </span>
              </div>
              <p class="mt-2 text-base font-semibold text-[#c84b31]">{{ career.role }}</p>
              <p v-if="career.description" class="mt-2 text-base text-[#4b5563]">
                {{ career.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>