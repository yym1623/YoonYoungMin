<script setup>
import { ref, onMounted, onUpdated, computed, watch } from 'vue'
// import { scrolldefined } from '../store/index'
// const store = scrolldefined();
const header = ref();

const isFixed = ref(false);
const leftFixed = ref(false);

const Main__Container = ref(null)

// const isFixedf = computed(() => store.isFixed)
// const isFixeds = computed(() => store.scrollChange(header.value.offsetTop))
// 
// const scrollData = () => {
// }
// storeToRefs를 사용해야만 반응형이 유지가 된다.

// storeToRefs
// computed로 가져오면 해당 데이터는 ref로 안감아도 반응형으로 가져온다? -> 가져오는건 반응형이지만 여기서 사용은 ref를 감싸줘야 반응형으로 감져온걸 반응형으로 쓴다? -> 둘 다 해줘야 한다>? 해당꺼에서 쓰고 받고 보낼려면?
// 해당 함수에서 리턴해주면 해당 리턴값을 불러와 지긴 하는데 받아오는 방법은 모르겠다 리턴하면 불러만ㅁ 와 지고 그걸 담아서 쓸려면 변수에 담아 쓰면 될듯
// 해당 스토어에서 실행은 시키면 해당 스토어껀 실행되는데 이 변수가 받아와 지는게 있을려면 해당 함수에서 리턴으로 받아올 데이터를 정해주면 받아와진다 return유무로 데이터 받아오거나 안받아오거나 하자 -> 바뀐 변수를 가져다 쓰는거보다
// 해당 함수부분에서 쓰는것도 방법이다 -> 해당 변수껄로 사용하면 조건걸어서 써야 한다
// const scrollData = computed(() => store.scrollChange(header.value.offsetTop))

// const scrollData = (size) => {
//   return store.scrollChange(size)
// }
  // const scrollData = store.data
  function scroll() {
    // offsetTop & offsetTop + height로 계산해서 할 수도 있다 (offset - offsetTop만 존재)
    if (window.scrollY > header.value.offsetTop + -300) {
      isFixed.value = true;
      Main__Container.value.style.overflowX = 'hidden'
    } else {
      isFixed.value = false;
    }
  }
// const dataChange = computed(() => store.isFixed)

// const scrolls = store.isFixed

// watch(scrollData(header.value.offsetTop), (v) => {
// console.log(v)
// })

onUpdated(() => {

  // console.log(scrollData(header.value.offsetTop))
  // console.log(scrollData.value)
})



// template에서 사용해도 색깔 안 변하는건 -> 변하는건 현재 script에서 사용할때 아래 template에서 사용할땐 색은 안변해도 연동은 된거다
onMounted(() => {
  // console.log(scrollData(header.value.offsetTop))


  // console.log(scrollData.value)
  // console.log(scrolls)


  // console.log('scroll tests')
  // console.log(scrollData.value)
  leftFixed.value = true;
  document.addEventListener("scroll", scroll);
})

</script>

<template>
  <div class="__Container">
    <div class="Main__Container" ref="Main__Container">
      <div class="Name"  ref="header" :class="{isFixed}">
        <div class="Text" :class="{leftFixed}">YOON YOUNG MIN</div>
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
    }
    .Name.isFixed {
      transition: .8s;
      animation: fadeInRight 1s;
        @keyframes fadeInRight {
          0% {
            transform: translateZ(0);
            opacity: 1;
          }
          to {
            transform: translate3d(100%, 0, 0);
            opacity: 0;
          }
        }
        visibility: hidden;
      // transform: translate3d(0, 70%, 0);
      // opacity: 0;
      // visibility: hidden;
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
@media screen and (max-width:1024px) {
  .__Container {
    width: 100%;
    height: 100%;
    .Main__Container {
      font-size: 5rem;
    }
  }
}
</style>