<script setup>
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
      <!-- <Career /> -->
      <Career />
      <Project />
      
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
