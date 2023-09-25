<script setup>
import { ref, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { scrolldefined } from './store/index'

// script setup 기준으로 내장 함수로 콜백형식으로 불러오면 -> 반응형?, import로만 불러오면 정적? -> 차이 분석하자
// components
import Main from './components/Main.vue'
import Profile from './components/Profile.vue'
import Skile from './components/Skile.vue'
import Project from './components/Project.vue'
import Career from './components/Career.vue'
import Stars from './components/Stars.vue'


// onBeforeUnmount(() => {
//   document.removeEventListener("scroll", scrollEvent);
// })

// mounted인데 updated처럼 실시간 감지한다?
onMounted(() => {
  document.addEventListener("scroll", scrollEvent);
})

const carreers = ref()
const top = ref()

const carreerActive = ref(false);
const topActive = ref(false);

// 가져온 데이터를 다시 가공할때 전에 ref 걸려있으면 바로 value로만 넣어준다? vs 가져온걸 다시 ref로 감싸야 계속 반응형으로 가능하다?
// 해당 요소 전체에 대한거면 상위에서 하고 -> 그안에 세세한 아이템을 입혀야하면 상위에서 props로 넘기거나 해당 요소 안에서 직접 하거나
const scrollEvent = () => {
  if (window.scrollY > carreers.value.offsetTop + -200) {
    carreerActive.value = true;
  } else {
    carreerActive.value = false;
  }

  if (carreers.value.offsetTop > top.value.offsetTop) {
    topActive.value = true;
  } else {
    topActive.value = false;
  }
}

const topBtn = () => {
  window.scrollTo({top: 0, behavior:'smooth'});
}

// onMounted(()=> {
//   console.log(window.innerHeight)

// })

// onUpdated(()=> {
//   // 자동완성 이 뜨면 문제는 없는거임 -> 그 후에 문제는 다른문제
//   // console.log(test.value.offsetTop)
//   // console.log(windowHeight.value.window.innerHeight)
// })

// watch(test, (e) => {
//   // e로 들어온 값은 value포함이라 value없이 바로 접근
//   console.log(e.offsetTop)
//   // console.log(i)
// })




// 렌더링 전에 가져와서 오류나는듯  -> 조건처리
// const test = () => {
//   if(main.value.offsetTop) {
//     console.log(main.value.offsetTop)
//   }
// }
// const store = scrolldefined();

// setup script에서 콘솔하면 처음에 mounted처럼 시작시 한번만 나온다 -> 렌더링된 후에 실행되니 마운티드랑 똑같다
// -> 마운티드 안쓰고 바로 콘솔로해도 똑같나? -> 분석
// test();

</script>

<template>
  <div id="page_Container" class="page__Container">
    <div class="Background__Container" :class="{carreerActive}">
      <Stars />
    </div>
    <div class="MyPage__Container">
      <div class="container"><Main /></div>
      <div class="container"><Profile /></div>
      <div class="container" :class="skileActive"><Skile /></div>
      <div ref="carreers" class="container"><Career /></div>
      <div class="container"><Project /></div>

      <div ref="top" @click="topBtn" class="up__btn" :class="{topActive}"><span class="material-symbols-outlined">arrow_upward</span></div>
      <div class="Footer">
        <div class="__reference">Designed Reference <span>LeeJeongMin</span></div>
        <div class="__developer">Developed By <span>YoonYoungMin</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
.page__Container {
  width: 100vw;
  height: 100vh;
  .Background__Container {
    background-color: rgb(34, 40, 49);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
  }
  .Background__Container.carreerActive {
    transition: .5s;
    background: #fff;
  }
  .MyPage__Container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    .container {
      width: 100%;
      height: 100%;
    }
    .up__btn {
      opacity: 0;
      transition: .7s;
      position: fixed;
      bottom: 25px;
      right: 25px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: #fff;
      border-radius: 50%;
      span {
        animation: arrows 1s infinite;
        @keyframes arrows {
          0% {
            margin-bottom: 0;
            opacity: .5;
          }
          50% {
            margin-bottom: 5px;
            opacity: .8;
            
          }
          100% {
            margin-bottom: 0;
            opacity: .5;
          }
        }
      }
    }
    .up__btn.topActive {
      opacity: 1;
      transition: .7s;
    }
    .Footer {
      font-family: Montserrat, sans-serif;
      background-color: rgb(0, 0, 0);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      font-size: 1.2rem;
      text-align: end;
      padding: 0 2rem 2rem 0;
      box-sizing: border-box;
      color: rgb(57, 62, 70);
      font-weight: 800;
      span {
        color: rgb(238, 238, 238);
      }
      .__developer {
        margin-top: 5px;
      }
    }
  }
}
</style>
