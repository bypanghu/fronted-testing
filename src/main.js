import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import { setupMockSever} from '../mock'
const app = createApp(App)
setupMockSever()
app.mount('#app')
