<script setup>

</script>

<template>
  <div class="__Container">
    <div class="Project__Container">
      <div class="Project__Name">Project.</div>
      <div class="__ContentBox">
        <!-- 1 -->
        <div class="Project__Content">
          <div class="a-animate">
            <div class="__Container">
              <div class="__title">API 영화 검색</div>
              <div class="__date">2022.10 ~ 2022.11 (1명)</div>
              <div class="__skiles">
                <div class="__skile">Vue3</div>
                <div class="__skile">Node</div>
                <div class="__skile">Vite</div>
              </div>
              <div class="__about">최신 & 인기 영화를 검색 및 저장하는 서비스</div>
              <div class="__contents">
                <div class="__content">영화 검색엔진을 활용하여 개발</div>
                <div class="__content">검색엔진 사이트와 연동하여 로그인 및 평점 등록</div>
                <div class="__content">반응형으로 개발</div>
                <div class="__content">DB 대신 로컬 스토리지 활용하여 데이터 저장</div>
              </div>
              <div class="__icons">
                <div class="__git"></div>
                <div class="__demo"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 2 -->
        <div class="Project__Content">
          <div class="a-animate">
            <div class="__Container">
              <div class="__title">편의점 조합 서비스</div>
              <div class="__date">2022.05 ~ 2022.08 (2명)</div>
              <div class="__skiles">
                <div class="__skile">Vue3</div>
                <div class="__skile">Django</div>
                <div class="__skile">Nginx</div>
                <div class="__skile">MySQL</div>
                <div class="__skile">AWS</div>
              </div>
              <div class="__about">AWS를 이용하여 실시간 편의점 행사상품 및 조합 서비스</div>
              <div class="__contents">
                <div class="__content">토큰 방식으로 이메일 인증을 통한 회원가입 개발</div>
                <div class="__content">편의점들(CU, GS, MINISTOP) 크롤링을 통한 실시간 데이터 연동</div>
                <div class="__content">MySQL을 이용한 데이터 관리</div>
                <div class="__content">Vite를 이용한 빌드</div>
              </div>
              <div class="__icons">
                <div class="__git"></div>
                <div class="__demo"></div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- 3 -->
        <div class="Project__Content">
          <div class="a-animate">
            <div class="__Container">
              <div class="__title">instagram 클론 개발</div>
              <div class="__date">2022.12 ~ 2023.01 (1명)</div>
              <div class="__skiles">
                <div class="__skile">Vue3</div>
                <div class="__skile">Vuex</div>
                <div class="__skile">Vite</div>
                <div class="__skile">Express</div>
                <div class="__skile">Socket</div>
                <div class="__skile">MySQL</div>
                <div class="__skile">AWS</div>
              </div>
              <div class="__about">instagram 레이아웃 및 기능 개발</div>
              <div class="__contents">
                <div class="__content">socket.io를 이용하여 실시간 메세지 기능 구현</div>
                <div class="__content">env를 사용하여 개발모드 & 실사용모드 구분</div>
                <div class="__content">express session으로 로그인 기능 관리 </div>
                <div class="__content">express -> db 연동하여 데이터 관리</div>
              </div>
              <div class="__icons">
                <div class="__git"></div>
                <div class="__demo"></div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- 4 -->
        <div class="Project__Content">
          <div class="a-animate">
            <div class="__Container">
              <div class="__title">추가 예정</div>
              <div class="__date">2023.00 ~ 2023.00 (1명)</div>
              <div class="__skiles">
                <div class="__skile">Vue3</div>
                <div class="__skile">Nuxt</div>
                <div class="__skile">Pinia</div>
                <div class="__skile">Vite</div>
              </div>
              <div class="__about">미정</div>
              <div class="__contents">
                <div class="__content">미정</div>
                <div class="__content">미정</div>
                <div class="__content">미정</div>
              </div>
              <div class="__icons">
                <div class="__git"></div>
                <div class="__demo"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.__Container {
  /* width: 100%; */
  /* height: 100%; */
  .Project__Container {
    font-family: Montserrat, sans-serif;
    position: relative;
    overflow-x: hidden; // ?
    .Project__Name {
      color: rgb(0, 255, 148);
      position: absolute;
      box-sizing: border-box;
      font-size: 8rem;
      font-weight: 800;
      left: 10rem;
      width: 100%;
      &:after {
        content: "Projects.";
        position: absolute;
        color: transparent;
        -webkit-text-stroke: 0.1rem rgb(0, 26, 255);
        top: -0.4rem;
        left: -0.4rem;
      }
    }
    .__ContentBox {
      margin-top: 5rem;
      background-color: rgb(0, 0, 0);
      padding: 8rem 8rem 20rem;
      display: flex;
      flex-direction: column;
      .Project__Content {
        padding-top: 5rem;
        width: 100%;
        color: white;
        .a-animate {
          transition-timing-function: ease;
          transition-duration: .4s;
          backface-visibility: hidden;
          transition-property: transform;
          /* transform: perspective(2500px) rotateY(0); */
          .__Container {
            padding: 2rem;
            position: relative;
            border-radius: 2rem;
            background-color: rgb(16, 16, 16);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .__title {
              color: rgb(0, 0, 0);
              left: -3rem;
              transform: rotate(-10deg);
              font-weight: 800;
              position: absolute;
              border-radius: 2rem;
              top: -2rem;
              padding: 1rem;
            }
            .__date {
              right: 2rem;
              padding: 0px 1rem;
              position: absolute;
              background-color: rgb(16, 16, 16);
              top: -0.1rem;
            }
            .__skiles {
              display: flex;
              margin: 0.5rem 0px;
              .__skile {
                background-color: rgb(255, 255, 255);
                color: rgb(0, 0, 0);
                padding: 0.2rem;
                border-radius: 0.5rem;
                margin-left: 0.5rem;
                &:first-child {
                  margin-left: 0;
                }
              }
            }
            .__contents {
                  margin-top: 0.5rem;
              .__content {
                line-height: 1.5rem;
              }
            }
          }
        }
        &:nth-child(1),
        &:nth-child(3) {
          .a-animate {
            .__Container {
              margin-right: 30rem;
              border: 0.1rem solid rgb(0, 255, 148);
              .__title {
                background-color: rgb(0, 255, 148);
                border: 0.1rem solid rgb(0, 255, 148);
              }
              .__about {
                color: rgb(0, 255, 148);
              }
              .__icons {
                display: flex;
                position: absolute;
                bottom: -1rem;
                right: 2rem;
                fill: rgb(0, 255, 148);
                cursor: pointer;
              }
            }
          }
        }
        &:nth-child(2),
        &:nth-child(4) {
          .a-animate {
            .__Container {
              margin-left: 30rem;
              border: 0.1rem solid rgb(0, 26, 255);
              .__title {
                background-color: rgb(0, 26, 255);
                border: 0.1rem solid rgb(0, 26, 255);
              }
              .__about {
                color: rgb(0, 26, 255);
              }
              .__icons {
                display: flex;
                position: absolute;
                bottom: -1rem;
                right: 2rem;
                fill: rgb(0, 26, 255);
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>