import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

// createApp(App).use(store).use(router).mount('#app')

// main.ts
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')