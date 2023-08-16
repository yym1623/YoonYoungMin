<script setup>
import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const isFixed = ref(false);
const leftFixed = ref(false);
// const rightFixed = ref(false);

// 변수명과 템플릿명이 같으면 ref로 참조가 가능하다
const header = ref();


onBeforeUnmount(() => {
  document.removeEventListener("scroll", scroll);
})

onMounted(() => {
  leftFixed.value = true;
  // rightFixed.value = true;

  document.addEventListener("scroll", scroll);
})

function scroll() {
  if (window.scrollY > header.value.offsetTop) {
    isFixed.value = true;

  } else {
    isFixed.value = false;
  }
}

</script>

<template>
  <div class="__Container">
    <div class="Main__Container">
      <div class="Name"  ref="header" :class="{ isFixed : isFixed }">
        <div class="Text" :class="{ leftFixed : leftFixed }">YOON YOUNG MIN</div>
        <!-- <div class="Nickname" :class="{ rightFixed : rightFixed }">KANG MIN</div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
.__Container {
  width: 100%;
  height: 100%;
  .Main__Container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 7rem;
    .Name {
      color: rgb(238,238,238);
      -webkit-text-stroke: 0.02em rgb(0, 173, 181);
      .Text.leftFixed {
        animation: fadeInLeft 1s;
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
          }
          to {
            opacity: 1;
            transform: translateZ(0);
          }
        }
      }
      .Nickname {
        margin-top: 20px;
        text-align: end;
      }
      .Nickname.rightFixed {
        animation: fadeInRight 1s;
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
          }
          to {
            opacity: 1;
            transform: translateZ(0);
          }
        }
      }
    }
    .Name.isFixed {
      transition: .8s;
      transform: translate3d(0, 70%, 0);
      opacity: 0;
      visibility: hidden;
      /* animation: fadout 1s;
      @keyframes fadout {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
          transform: translate3d(0, 30%, 0);
        }
      } */

    }
  }
}
</style>