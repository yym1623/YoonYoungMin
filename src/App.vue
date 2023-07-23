<script setup>
import { ref } from 'vue'; 
// 옵션 api -> 컴포지션 api -> script setup
// 기본 -> 간결 -> 더 간결
// 기존의 옵션 api -> 하나를 할려면 추가하고 정의하고 -> 코드가 길어지면 그만큼 길어져서 유지보수 차원에서 좋지 못한다
// 컴포지션 api -> 옵션 api에서의 단점들을 보완이 가능하면서 유지보수 차원에선 좋아지면서 뭘 해야하는지 코드에서 간결히 볼 수 있다 (data접근시에도 this 필요없다)
// script setup -> 컴포지션 api에서도 템플릿에 컴포넌트 추가 및 return으로 내보내거나 이런 복잡한 것들을 다 없애고 더 간결하게 해줄 수 있다

// script에 setup이 있으므로 바로 컴포지션 api로 사용하면 된다

  const data = ref('data반응형 테스트 입니다');

  // setup 안에서의 함수 선언은 변수안의 함수식으로 해야하나 보다 기본 옵션방법에선 함수안에 이름들로만 했는데 방법이 조금 다른거 같다
  const test = () => {
    console.log(data.value);
  }
</script>

<template>
  <div @click="test">클릭하면 나온다</div>
</template>

<style lang="scss" scoped>
// scoped -> 컴포넌트로 다른 파일에서 사용할때 해당 컴포넌트의 같은 클래스가 있으면 다른 파일에서의 선언과 겹칠 수 있으므로 해당 css파일에서만 사용할 수 있게 바꿔준다
// 하지만 브라우저에서는 다 똑같이 같은 클래스는 이름이 같으면 중복 적용이 될 수 밖에 없다 -> vue자체에서는 번들링을 하고 확인해보면 scoped나 다른 컴포넌트에서 가져온 값을 클래스에 data를 붙이거나 해서 겹치지 않게 해준다

</style>
