<script setup>

</script>

<template>
  <div class="__Container">
    <div class="Skile__Container">
      <div class="Skile__Name">Skile.</div>
      <div class="Skile__Item">
        <div class="__Items">
          <div class="__Item">Vue</div>
          <div class="__Item">Nuxt.js</div>
          <div class="__Item">Pinia</div>
          <div class="__Item">Javascript</div>
          <div class="__Item">Typescript</div>
          <div class="__Item">SCSS</div>
          <div class="__Item">VITE</div>
          <div class="__Item">준비중</div>
          <div class="__Item">준비중</div>
          <div class="__Item">준비중</div>
        </div>
      </div>
      <div class="Skiles">
        <div class="__Skiles">
          <div class="__Name">Vue</div>
          <div class="__Contents">
            <div class="__Content">Vue2 option api와 Vue3 composition api를 사용할 수 있습니다.</div>
            <div class="__Content">Vuex & Pinia등의 상태관리 라이브러리를 사용할 수 있습니다.</div>
          </div>
        </div>
        <div class="__Skiles">
          <div class="__Name">React</div>
          <div class="__Contents">
            <div class="__Content">현재 공부중 입니다.</div>
          </div>
        </div>
        <div class="__Skiles">
          <div class="__Name">HTML/CSS</div>
          <div class="__Contents">
            <div class="__Content">웹표준을 지키려 노력합니다.</div>
            <div class="__Content">시맨틱 태그를 사용할려고 하고 있습니다.</div>
            <div class="__Content">SCSS 문법에 익숙합니다.</div>
            <div class="__Content">크로스 브라우징에 대응할 수 있습니다.</div>
            <div class="__Content">keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.</div>
          </div>
        </div>
        <div class="__Skiles">
          <div class="__Name">Javascript</div>
          <div class="__Contents">
            <div class="__Content">ES6+ 문법에 익숙합니다.</div>
            <div class="__Content">webpack, parcel, vite 등의 번들러 사용 경험이 있습니다.</div>
            <div class="__Content">Jest를 활용한 테스트코드 작성 경험이 있습니다.</div>
            <div class="__Content">Babel을 사용하여 개발한 경험이 있습니다.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.__Container {
  font-family: Montserrat, sans-serif;
  max-width: 1373px;
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  margin: auto;
  .Skile__Container {
    width: 90%;
    margin: auto;
    .Skile__Name {
      position: relative;
      color: rgb(0, 173, 181);
      font-size: 60px;
      &::after {
        content: "Skile.";
        position: absolute;
        color: rgb(238, 238, 238);
        top: -0.3rem;
        left: -0.3rem;
      }
    }
    .Skile__Item {
      width: 90%;
      margin: auto;
      margin-top: 2rem;
      .__Items {
        font-size: 17px;
        display: flex;
        justify-content: space-between;
        .__Item {
          border: 0.2rem solid white;
          font-weight: 500;
          padding: 0.2rem 0.5rem;
          border-radius: 1rem;
          color: rgb(238, 238, 238);
        }
      }
    }
    .Skiles {
      
    }
  }
}
</style>