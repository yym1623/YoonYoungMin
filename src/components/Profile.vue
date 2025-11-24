<script setup lang="ts">
import { ref } from 'vue'

const myimg = ref(false)

const openLink = (href: string) => {
  window.open(href, '_blank')
}

type ParagraphPart = {
  text: string
  highlight?: boolean
}

type Paragraph = {
  parts: ParagraphPart[]
}

const contactButtons = [
  {
    label: 'yym16233@gmail.com',
    href: 'mailto:yym16233@gmail.com'
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
      { text: '"몰아치는 파도를 피하지 말고 올라타라"', highlight: true },
      { text: ' 는 문장이 최근 계속 떠오릅니다.' }
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
  <section class="flex min-h-[90vh] w-full items-center justify-center px-4 py-12">
    <div class="w-full max-w-5xl rounded-[50px] bg-[#eeeeee] px-6 py-10 shadow-xl lg:px-12">
      <header class="flex w-full justify-center">
        <div class="text-center">
          <p class="font-['Montserrat',sans-serif] text-4xl font-semibold text-[#00adb5] sm:text-6xl">
            FrontEnd
          </p>
          <div class="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-[#74ebd5] to-[#9face6] sm:h-1.5"></div>
        </div>
      </header>

      <div
        class="mt-12 flex flex-col items-center justify-center gap-10 font-['Montserrat',sans-serif] lg:flex-row lg:items-center lg:gap-16"
      >
        <div class="flex flex-col items-center">
          <div
            class="relative h-[200px] w-[200px] cursor-pointer rounded-full bg-[#00adb5] transition-all duration-300"
            @mouseenter="myimg = true"
            @mouseleave="myimg = false"
          >
            <div
              class="absolute -left-4 top-6 inline-flex -rotate-6 items-center rounded-[2rem] border-[0.2rem] border-white bg-[#393e46] px-4 py-2 font-extrabold text-xl text-[#eeeeee]"
            >
              Developer
            </div>
            <img
              src="@/assets/myimg.png"
              alt="MyImg"
              class="absolute -bottom-4 right-2 w-[120px]"
            />
            <div
              :class="[
                'absolute inset-0 flex flex-col items-center justify-center rounded-full bg-[rgba(57,50,70,0.6)] text-white transition-opacity duration-300',
                myimg ? 'opacity-100' : 'opacity-0'
              ]"
            >
              <div class="text-center">
                <p class="text-lg">윤영민</p>
                <p class="mt-2 text-sm">1998.03.12</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="flex h-52 flex-col items-center justify-center rounded-[2.5rem] border-[0.2rem] border-[#00adb5] py-6 text-center tracking-wide"
          >
            <button
              v-for="button in contactButtons"
              :key="button.label"
              type="button"
              class="w-[100%] rounded-2xl border-[0.5rem] border-[#eeeeee] bg-[#393e46] px-8 py-2 text-lg text-[#eeeeee] transition-colors duration-200 hover:bg-[#00adb5]"
              @click="openLink(button.href)"
            >
              {{ button.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="mt-12 flex w-full justify-center px-4 pb-6">
        <div class="max-w-3xl space-y-6 text-base text-[#222] sm:text-lg">
          <p v-for="(paragraph, idx) in profileParagraphs" :key="idx">
            <template v-for="(part, partIdx) in paragraph.parts" :key="partIdx">
              <span
                v-if="part.highlight"
                class="bg-gradient-to-r from-[#00adb5] to-[#393e46] bg-clip-text text-xl font-bold text-transparent"
              >
                {{ part.text }}
              </span>
              <span v-else>{{ part.text }}</span>
            </template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>