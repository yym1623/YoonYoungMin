import { createApp } from 'vue'
import App from './App.vue'

// 전역 스타일 import
import '@/styles/tailwind.css'
import '@/styles/global.css'

const app = createApp(App)

// 전역 컴포넌트 등록 (필요시)
// import SomeComponent from '@/components/SomeComponent.vue'
// app.component('SomeComponent', SomeComponent)

app.mount('#app')

