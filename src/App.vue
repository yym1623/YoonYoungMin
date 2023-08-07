<script setup>
// components
import Main from './components/Main.vue'
import Profile from './components/Profile.vue'
import Skile from './components/Skile.vue'
import Project from './components/Project.vue'
import Footer from './components/Footer.vue'

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
      <Project />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  }
}
</style>
