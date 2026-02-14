<script setup lang="ts">
import type { CareerItem } from '@/types/career'

const careerItems: CareerItem[] = [
  {
    company: '피어라인',
    period: '2024.09 ~ 2025.11',
    position: 'FE 개발',
    grade: '대리',
    department: '플랫폼 개발팀/FE 개발팀'
  },
  {
    company: '레몬아이티',
    period: '2023.08 ~ 2024.08',
    position: 'FE 개발',
    grade: '주임',
    department: '플랫폼 개발팀/FE 개발팀'
  },
  {
    company: '일렉트리',
    period: '2021.10 ~ 2023.01',
    position: 'SW 개발',
    grade: '연구원',
    department: '기업부설연구소'
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
        <div class="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-[#c84b31]  to-transparent md:left-1/2 md:-translate-x-1/2 md:z-10"></div>

        <div class="flex flex-col gap-10">
          <article
            v-for="(career, idx) in careerItems"
            :key="career.company"
            :class="[
              'relative border border-[#e5e7eb] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#00adb5]',
              'rounded-[32px] md:rounded-none',
              'md:w-1/2',
              idx % 2 === 0
                ? 'md:self-start md:mr-auto md:pr-8 md:rounded-tl-[32px] md:rounded-bl-[32px]'
                : 'md:self-end md:ml-auto md:pl-8 md:rounded-tr-[32px] md:rounded-br-[32px]'
            ]"
          >
            <div class="mt-6 space-y-2 md:mt-0">
              <h3 class="text-2xl font-bold text-[#111827]">{{ career.company }}</h3>
              <div class="rounded-2xl border border-[#f3f4f6] bg-[#f9fafb] px-4 py-2 text-sm text-[#4b5563]">
                <p class="font-semibold tracking-wide text-[#c84b31]">기간</p>
                <p class="text-base font-bold text-[#0f172a]">{{ career.period }}</p>
              </div>
              <div class="rounded-2xl border border-[#f3f4f6] bg-[#f9fafb] px-4 py-2 text-sm text-[#4b5563]">
                <p class="font-semibold tracking-wide text-[#c84b31]">직급</p>
                <p class="text-base font-bold text-[#0f172a]">{{ career.grade }}</p>
              </div>
              <div class="rounded-2xl border border-[#f3f4f6] bg-[#f9fafb] px-4 py-2 text-sm text-[#4b5563]">
                <p class="font-semibold tracking-wide text-[#c84b31]">직책</p>
                <p class="text-base font-bold text-[#0f172a]">{{ career.position }}</p>
              </div>
              <div class="rounded-2xl border border-[#f3f4f6] bg-[#f9fafb] px-4 py-2 text-sm text-[#4b5563]">
                <p class="font-semibold tracking-wide text-[#c84b31]">부서</p>
                <p class="text-base font-bold text-[#0f172a]">{{ career.department }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>