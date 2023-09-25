import { defineStore } from 'pinia'
import { ref } from 'vue'

// smaple
// export const test = defineStore('test', () => {
  // ref()는 state 속성이 됨.
  // computed()는 getters가 됨.
  // function()은 actions가 됨.

  // state
  // const state = ref();

  // getters
  // const getters = computed(() => state.value * 2)

  // actions
  //   function increment() {
  //     state.value++
  //   }

  //   return { state, getters, increment }
// })


export const scrolldefined = defineStore('scroll', () => {
  // pinia -> data ref로 반응형 만들면 그건 해당 pinia안에서만 반응형인거다 
  // -> pinia 안에서만 .value 및 반응형이 입혀지는거지 불러오는 곳에선 따로 반응형 작업을 해줘야 한다
  // 해당 파일에서 반응형 만들면 그건 해당 파일에서만이고 다른 파일로 옮기면 거기서도 같은 작업을 해줘야한다
  const isFixed = ref(false);

  function scrollChange(activeLength) {
    if (window.scrollY > activeLength) {
      isFixed.value = true;
    } else {
      isFixed.value = false;
    } 
    return isFixed.value
  }

  return { isFixed, scrollChange }
})