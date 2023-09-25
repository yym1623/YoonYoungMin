<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'

const isFixed = ref(false);

const projectActive = ref();

onMounted(() => {
  document.addEventListener("scroll", scroll);
})

function scroll() {
  if (window.scrollY > projectActive.value.offsetTop + -300) {
    isFixed.value = true;
    console.log(isFixed.value)
  } else {
    isFixed.value = false;
  }
}

// location
function location(href) {
  window.open(href, "_blank");
}
</script>

<template>
  <div class="__Container" ref="projectActive">
    <div class="Project__Container">
      <div class="Project__Name">Projects.</div>
      <div class="__ContentBox">
        <!-- 1 -->
        <div class="Project__Content">
          <div class="a-animate" :class="{isFixed}">
            <div class="__Containers">
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
                <div class="__icon __demo" @click="location('https://spmv.netlify.app/#/')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path></svg>
                </div>
                <div class="__icon __git"  @click="location('https://github.com/yym1623/SPMV')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 2 -->
        <div class="Project__Content">
          <div class="a-animate" :class="{isFixed}">
            <div class="__Containers">
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
                <div class="__icon __demo" @click="location('http://54.180.193.83:8080/')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path></svg>
                </div>
                <div class="__icon __git" @click="location('https://github.com/yym1623/Convenience')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- 3 -->
        <div class="Project__Content">
          <div class="a-animate" :class="{isFixed}">
            <div class="__Containers">
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
                <div class="__icon __demo" @click="location('https://y-instagram.netlify.app/#/login')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path></svg>
                </div>
                <div class="__icon __git" @click="location('https://github.com/yym1623/instagram')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- 4 -->
        <div class="Project__Content">
          <div class="a-animate" :class="{isFixed}">
            <div class="__Containers">
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
                <div class="__icon __demo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path></svg>
                </div>
                <div class="__icon __git">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
                </div>
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
          .__Containers {
            padding: 2rem;
            position: relative;
            border-radius: 2rem;
            background-color: rgb(16, 16, 16);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition-timing-function: ease;
            transition-duration: .4s;
            backface-visibility: hidden;
            transition-property: transform;
            .__title {
              color: rgb(0, 0, 0);
              left: -3rem;
              transform: rotate(-10deg) !important;
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
            .__icons {
              display: flex;
              position: absolute;
              bottom: -1rem;
              right: 2rem;
              cursor: pointer;
            }
          }
        }
        &:nth-child(1),
        &:nth-child(3) {
          .a-animate {
            .__Containers {
              margin-right: 30rem;
              border: 0.1rem solid rgb(0, 255, 148);
              transform: perspective(2500px) rotateY(-100deg);
              .__title {
                transform: perspective(2500px) rotateY(-100deg);
                background-color: rgb(0, 255, 148);
                border: 0.1rem solid rgb(0, 255, 148);
              }
              .__about {
                color: rgb(0, 255, 148);
              }
              .__icons {
                .__demo {
                  margin-right: 10px;
                }
                .__icon {
                  svg {
                    fill: rgb(0, 255, 148);
                  }
                }
              }
            }
          }
          .a-animate.isFixed {
            .__Containers {
              transition-duration: .4s;
              transform: perspective(2500px) rotateY(0);
            }
            .__title {
              transition-duration: .4s;
              transform: perspective(2500px) rotateY(0);
            }
          }
        }
        &:nth-child(2),
        &:nth-child(4) {
          .a-animate {
            .__Containers {
              margin-left: 30rem;
              border: 0.1rem solid rgb(0, 26, 255);
              transform: perspective(2500px) rotateY(100deg);
              .__title {
                transform: perspective(2500px) rotateY(100deg);
                background-color: rgb(0, 26, 255);
                border: 0.1rem solid rgb(0, 26, 255);
              }
              .__about {
                color: rgb(0, 26, 255);
              }
              .__icons {
                .__demo {
                  margin-right: 10px;
                }
                .__icon {
                  svg {
                    fill: rgb(0, 26, 255);
                  }
                }
              }
            }
          }
          .a-animate.isFixed {
            .__Containers {
              transition-duration: .4s;
              transform: perspective(2500px) rotateY(0);
            }
            .__title {
              transition-duration: .4s;
              transform: perspective(2500px) rotateY(0);
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width:1024px) {
  .__Container {
    .Project__Container {
      .__ContentBox {
        .Project__Content
        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(2),
        &:nth-child(4) {
          .a-animate {
            .__Containers {
              margin: auto !important;
            }
          }
        } 
      }
    }
  }
}
</style>