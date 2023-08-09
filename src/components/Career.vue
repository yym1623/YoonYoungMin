<script setup>

</script>

<template>
  <div class="__Container">
    <div class="Carrer__Container">
      <div class="Carrer__Name">
        <div class="__Name">Carrer.</div>
        <div class="n__line ft"></div>
        <div class="n__line sc"></div>
        <div class="__MyCarrer">
          <div class="__title"><span>Eletree</span>(2021.10 ~ 2023.01)</div>
          <div class="__about">SW 개발 (사원)</div>
        </div>
      </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.__Container {
  font-family: Montserrat, sans-serif;
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  .Carrer__Container {
    width: 90%;
    margin: auto;
    .Carrer__Name {
      position: relative;
      .__Name {
        display: inline-block;
        color: rgb(34, 40, 49);
        font-size: 60px;
        background-color: rgb(200, 75, 49);
        &::after {
          content: "Carrer.";
          position: absolute;
          color: rgb(238, 238, 238);
          top: -0.3rem;
          left: -0.3rem;
        }
      }
      .ft {
        position:absolute;
        top: 60px;
        width: 7px;
        height: 50vh;
        background-color: rgb(200, 75, 49);
      }
      .sc {
        position:absolute;
        /* bottom: 0; */
        top: 506px;
        width: 30px;
        height: 7px;
        transform: rotate(140deg);
        background-color: rgb(200, 75, 49);
      }
      .__MyCarrer {
        position: absolute;
        left: 8rem;
        top: 7rem;
        .__title {
          font-weight: bold;
          span {
            color: rgb(52, 103, 81);
            font-size: 30px;
            margin-right: 15px;
          }
        }
        .__about {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>