<script setup>
// script setup 기준으로 내장 함수로 콜백형식으로 불러오면 -> 반응형?, import로만 불러오면 정적? -> 차이 분석하자
// components
import Main from './components/Main.vue'
import Profile from './components/Profile.vue'
import Skile from './components/Skile.vue'
import Project from './components/Project.vue'
import Career from './components/Career.vue'
import Stars from './components/Stars.vue'
</script>

<template>
  <div id="page_Container" class="page__Container">
    <div class="Background__Container">
      <Stars />
    </div>
    <div class="MyPage__Container">
      <Main />
      <Profile />
      <Skile />
      <Career />
      <Project />

      <div class="up__btn"><span class="material-symbols-outlined">arrow_upward</span></div>
      <Footer class="Footer">
        <div class="__reference">Designed Reference <span>LeeJeongMin</span></div>
        <div class="__developer">Developed By <span>YoonYoungMin</span></div>
      </Footer>
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
  }
  .MyPage__Container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    .up__btn {
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
    .Footer {
      font-family: Montserrat, sans-serif;
      background-color: rgb(0, 0, 0);
      width: 100%;
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
