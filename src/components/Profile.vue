<script setup>
import { ref } from 'vue';

const myimg = ref(false);

// location
function location(href) {
  window.open(href, "_blank");
}

function alerts() {
  alert('준비중입니다!')
}



</script>

<template>
  <div class="__Container">
    <div class="Profile__Container">
      <div class="Header">
        <div class="__Header">
          <div class="__Text">FrontEnd</div>
          <div class="__Line"></div>
        </div>
      </div>
      <div class="About">
        <div class="ImageBox">
          <div class="__Img" @mouseover="myimg = true" @mouseleave="myimg = false" :class="{ myimg : myimg }" >
            <div class="__Job">Developer</div>
            <img class="__MyImg" src="../assets/myimg.png" alt="MyImg">

            <div class="On__MyImg">
              <div class="__OnBox">
                <div class="__Item __Name">윤영민</div>
                <div class="__Item __BirthDay">1998.03.12</div>
              </div>
            </div>
          </div>
          <div class="__about"></div>
        </div>
        <div class="TextBox">
          <div class="__TextBox">
            <div class="Texts __gmail">yym16233@gmail.com</div>
            <div class="Texts __git" @click="location('https://github.com/yym1623')">GITHUB</div>
            <div class="Texts __blug" @click="alerts()">BLUG</div>
            <div class="Texts __RESUME" @click="location('https://www.figma.com/file/03Le7GFj5cEVf3UOxmQcRE/%EC%9C%A4%EC%98%81%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?type=design&node-id=0%3A1&mode=design&t=0t8WvqDlul2v9ILp-1')">RESUM</div>
          </div>
        </div>
      </div>
      <div class="Des">
        <div class="__Des">
          <div class="__Texts"><span>FrontEnd</span>를 깊이 있게 다지고 싶은 <span>주니어 개발자</span>입니다!</div>
          <div class="__Texts">로드맵을 보면서 Front, Back 가리지 않고 재밌게 배워가고 있습니다</div>
          <div class="__Texts"><span>"몰아치는 파도를 피하지 말고 올라타라"</span> 최근 계속 떠올리는 말입니다!</div>
          <div class="__Texts">진행하다 막히고 그것을 해결할 때의 뿌듯함은 저한테는 계속 <span>추진력</span>이 되어주고 있습니다</div>
          <div class="__Texts">항상 새로운 프로젝트를 만들면서 저 자신을 <span>성장시키는 기회</span>를 얻고 있습니다</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
.__Container {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  .Profile__Container {
    background-color: rgb(238, 238, 238);
    width: 70%;
    height: 100%;
    border-radius: 50px;
    .Header {
      width: 100%;
      padding-top: 50px;
      display: flex;
      justify-content: center;
      .__Header {
        .__Text {
          font-family: 'Montserrat', sans-serif;
          font-size: 75px;
          color: rgb(0, 173, 181);
        }
        .__Line {
          background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);height: 4px;
          border-radius: 20px;
          margin-top: 10px;
        }
      }

    }
    .About {
      font-family: 'Montserrat', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4rem 0;
      .ImageBox {
        .__Img {
          position: relative;
          background-color: rgb(0, 173, 181);;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          .__Job {
            position: absolute;
            background-color: rgb(57, 62, 70);
            padding: 0.5rem 1.5rem;
            font-weight: 800;
            font-size: 1.5rem;
            border-radius: 2rem;
            color: rgb(238, 238, 238);
            left: -1rem;
            top: 1.8rem;
            transform: rotate(-10deg);
            border: 0.2rem solid white;
          }
          .__MyImg {
            position: absolute;
            right: 0;
            bottom: -10px;
            width: 120px;
          }
          .On__MyImg {
            opacity: 0;
          }
        }
        .__Img.myimg {
          position: relative;
          .On__MyImg {
            position: absolute;
            z-index: 10;
            width: 100%;
            height: 100%;
            opacity: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color:rgba(57, 50, 70, 0.6);
            color: #fff;
            border-radius: 50%;
            .__OnBox {
              text-align: center;
              .__Item {
                margin-top: 10px;
              }
              .__Item:first-child {
                margin-top: 0;
              }
            }
          }
        }
        .__Img:hover {
          cursor: pointer;
          
        }
      }
      .TextBox {
        margin-left: 6rem;
        .__TextBox {
          border-radius: 2.5rem;
          padding: 4rem;
          box-sizing: border-box;
          height: 13rem;
          display: flex;
          letter-spacing: 0.1rem;
          flex-direction: column;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          border: 0.2rem solid rgb(0, 173, 181);
          .Texts {
            font-size: 18px;
            cursor: pointer;
            width: 100%;
            padding: 0.8rem 2rem;
            border-radius: 2rem;
            border: 0.5rem solid rgb(238, 238, 238);
            background-color: rgb(57, 62, 70);
            color: rgb(238, 238, 238);
          }
          .Texts:hover {
            background-color: rgb(0, 173, 181);
          }
        }
      }
    }
    .Des {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      .__Des {
        font-size: 18px;
        .__Texts {
          margin-top: 30px;
          span {
            background: linear-gradient(128.93deg, rgb(0, 173, 181) 22.41%, rgb(57, 62, 70) 93.45%);
            color: transparent;
            -webkit-background-clip: text;
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
@media screen and (max-width:1024px) {
  .__Container {
    .Profile__Container {
      width: 100%;
    }
  } 
}
</style>